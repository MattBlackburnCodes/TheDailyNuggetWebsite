/* global process */

const PRINTIFY_API_BASE = 'https://api.printify.com/v1'

const sendJson = (response, statusCode, body) => {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

const getLowestEnabledPrice = (variants = []) => {
  const enabledPrices = variants
    .filter((variant) => variant.is_enabled && typeof variant.price === 'number')
    .map((variant) => variant.price)

  if (!enabledPrices.length) return null

  return Math.min(...enabledPrices)
}

const normalizeProduct = (product) => ({
  id: product.id,
  title: product.title,
  description: product.description,
  image: product.images?.[0]?.src || '',
  price: getLowestEnabledPrice(product.variants),
  variants: (product.variants || [])
    .filter((variant) => variant.is_enabled)
    .map((variant) => ({
      id: variant.id,
      title: variant.title,
      price: variant.price,
      isAvailable: variant.is_available,
    })),
  visible: product.visible,
})

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    sendJson(response, 405, { error: 'Method not allowed' })
    return
  }

  const token = process.env.PRINTIFY_API_TOKEN
  const configuredShopId = process.env.PRINTIFY_SHOP_ID

  if (!token) {
    sendJson(response, 500, {
      error: 'Printify is not configured yet.',
      setup: 'Add PRINTIFY_API_TOKEN to your environment variables.',
    })
    return
  }

  try {
    let shopId = configuredShopId

    if (!shopId) {
      const shopsResponse = await fetch(`${PRINTIFY_API_BASE}/shops.json`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!shopsResponse.ok) {
        sendJson(response, shopsResponse.status, { error: 'Unable to load Printify shops.' })
        return
      }

      const shops = await shopsResponse.json()
      shopId = shops?.[0]?.id
    }

    if (!shopId) {
      sendJson(response, 404, { error: 'No Printify shop found for this account.' })
      return
    }

    const productsResponse = await fetch(`${PRINTIFY_API_BASE}/shops/${shopId}/products.json?limit=24`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!productsResponse.ok) {
      sendJson(response, productsResponse.status, { error: 'Unable to load Printify products.' })
      return
    }

    const productsPayload = await productsResponse.json()
    const products = (productsPayload.data || []).map(normalizeProduct)

    sendJson(response, 200, { products })
  } catch (error) {
    sendJson(response, 500, {
      error: 'Printify products could not be loaded.',
      detail: error.message,
    })
  }
}
