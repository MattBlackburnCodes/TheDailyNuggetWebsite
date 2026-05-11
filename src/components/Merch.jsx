import { useEffect, useState } from 'react'
import PageMeta from './PageMeta.jsx'

const formatPrice = (priceInCents) => {
    if (priceInCents === null || priceInCents === undefined) return 'Price coming soon'

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(priceInCents / 100)
}

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '').trim()

function MerchCard({ product }) {
    const availableVariants = product.variants?.length
        ? product.variants
        : [{ id: 'default', title: 'Standard', price: product.price }]
    const [selectedVariantId, setSelectedVariantId] = useState(String(availableVariants[0].id))
    const [quantity, setQuantity] = useState(1)
    const [showDetails, setShowDetails] = useState(false)
    const selectedVariant = availableVariants.find((variant) => String(variant.id) === selectedVariantId) || availableVariants[0]
    const productDescription = stripHtml(product.description) || 'Daily Nugget merch item.'
    const purchaseSubject = encodeURIComponent(`Daily Nugget merch order: ${product.title}`)
    const purchaseBody = encodeURIComponent(
        `Hi! I would like to purchase:\n\nProduct: ${product.title}\nOption: ${selectedVariant.title}\nQuantity: ${quantity}\nEstimated item price: ${formatPrice(selectedVariant.price || product.price)}\n\nPlease send me checkout details.`
    )

    return (
        <article className="merch-card">
            <div className="merch-image-wrap">
                {product.image && <img src={product.image} alt={product.title} />}
            </div>

            <div className="merch-card-body">
                <div>
                    <h2>{product.title}</h2>
                    <p className={showDetails ? 'is-expanded' : ''}>{productDescription}</p>
                    {productDescription.length > 140 && (
                        <button className="merch-details-button" type="button" onClick={() => setShowDetails((isOpen) => !isOpen)}>
                            {showDetails ? 'Hide details' : 'View details'}
                        </button>
                    )}
                </div>

                <div className="merch-controls">
                    <label>
                        Option
                        <select value={selectedVariantId} onChange={(event) => setSelectedVariantId(event.target.value)}>
                            {availableVariants.map((variant) => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.title}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Qty
                        <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
                            {[1, 2, 3, 4, 5].map((amount) => (
                                <option key={amount} value={amount}>
                                    {amount}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="merch-purchase-row">
                    <strong>{formatPrice(selectedVariant.price || product.price)}</strong>
                    <a
                        className="btn btn-blackburn-gold"
                        href={`mailto:jointhecrispycrew@gmail.com?subject=${purchaseSubject}&body=${purchaseBody}`}
                    >
                        Purchase
                    </a>
                </div>
            </div>
        </article>
    )
}

export default function Merch() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('/api/printify-products')
                const contentType = response.headers.get('content-type') || ''

                if (!contentType.includes('application/json')) {
                    throw new Error('The Printify API proxy is not running. Use Vercel dev locally or deploy with environment variables set.')
                }

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || 'Unable to load merch.')
                }

                setProducts(data.products || [])
            } catch (loadError) {
                setError(loadError.message)
            } finally {
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])

    return (
        <main className="merch-page bg-blackburn-gray text-gold">
            <PageMeta
                title="Merch"
                description="Shop Daily Nugget merch inspired by Chick E. Nugget, motivational quotes, fun facts, jokes, affirmations, and the crispy crew."
                path="/merch"
            />
            <section className="container merch-page-content">
                <div className="merch-hero">
                    <p className="challenge-kicker">Shop</p>
                    <h1>Daily Nugget Merch</h1>
                    <p>Fresh Chick E. Nugget gear, pulled from Printify and ready for the crispy crew.</p>
                </div>

                {isLoading && <p className="merch-status">Loading merch...</p>}
                {error && <p className="merch-status merch-error">{error}</p>}

                {!isLoading && !error && products.length === 0 && (
                    <p className="merch-status">No merch is published in Printify yet. Check back soon.</p>
                )}

                <div className="merch-grid">
                    {products.map((product) => (
                        <MerchCard product={product} key={product.id} />
                    ))}
                </div>
            </section>
        </main>
    );
}
