import { useEffect } from 'react'

const ADSENSE_CLIENT = 'ca-pub-7577853474425204'

export default function GoogleAd({ label = 'Advertisement', className = '', slot }) {
  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    } catch (error) {
      console.warn('AdSense could not load this ad placement.', error)
    }
  }, [])

  return (
    <div className={`google-ad-wrapper ${className}`} aria-label={label}>
      <span className="google-ad-label">{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-format="auto"
        data-full-width-responsive="true"
        {...(slot ? { 'data-ad-slot': slot } : {})}
      />
      <span className="google-ad-fallback">Google AdSense placement</span>
    </div>
  )
}
