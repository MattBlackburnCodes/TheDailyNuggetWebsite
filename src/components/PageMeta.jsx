import { useEffect } from 'react'

const SITE_NAME = 'The Daily Nugget'
const SITE_URL = 'https://www.thedailynugget.app'

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const setCanonicalLink = (url) => {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

export default function PageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
    const canonicalUrl = `${SITE_URL}${path}`

    document.title = fullTitle
    setCanonicalLink(canonicalUrl)
    setMetaTag('meta[name="description"]', { name: 'description', content: description })
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description })
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    setMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
  }, [description, path, title])

  return null
}
