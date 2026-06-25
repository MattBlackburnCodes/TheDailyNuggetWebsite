import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'

const BANNER_AD_ID = 'ca-app-pub-7577853474425204/3101634617'
const BANNER_HEIGHT_VAR = '--admob-banner-height'

let initializePromise

function setBannerHeight(height) {
  const bannerHeight = Math.max(0, Number(height) || 0)

  document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, `${bannerHeight}px`)
  document.body.classList.toggle('has-admob-banner', bannerHeight > 0)
}

function clearBannerHeight() {
  document.documentElement.style.removeProperty(BANNER_HEIGHT_VAR)
  document.body.classList.remove('has-admob-banner')
}

export default function AdMobBanner() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return undefined
    }

    let isActive = true
    let sizeChangedListener
    let failedToLoadListener

    async function showBanner() {
      try {
        const {
          AdMob,
          AdmobConsentStatus,
          BannerAdPosition,
          BannerAdSize,
          BannerAdPluginEvents,
        } = await import('@capacitor-community/admob')

        if (!initializePromise) {
          initializePromise = AdMob.initialize()
        }

        await initializePromise

        if (!isActive) {
          return
        }

        let consentInfo = await AdMob.requestConsentInfo()

        if (
          consentInfo.status === AdmobConsentStatus.REQUIRED &&
          consentInfo.isConsentFormAvailable
        ) {
          consentInfo = await AdMob.showConsentForm()
        }

        if (!consentInfo.canRequestAds) {
          clearBannerHeight()
          return
        }

        sizeChangedListener = await AdMob.addListener(
          BannerAdPluginEvents.SizeChanged,
          ({ height }) => {
            if (isActive) {
              setBannerHeight(height)
            }
          },
        )

        failedToLoadListener = await AdMob.addListener(
          BannerAdPluginEvents.FailedToLoad,
          (error) => {
            console.warn('AdMob banner failed to load', error)
            clearBannerHeight()
          },
        )

        await AdMob.showBanner({
          adId: BANNER_AD_ID,
          adSize: BannerAdSize.ADAPTIVE_BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
        })
      } catch (error) {
        console.warn('Unable to show AdMob banner', error)
        clearBannerHeight()
      }
    }

    showBanner()

    return () => {
      isActive = false
      clearBannerHeight()
      sizeChangedListener?.remove()
      failedToLoadListener?.remove()

      import('@capacitor-community/admob')
        .then(({ AdMob }) => AdMob.removeBanner())
        .catch((error) => {
          console.warn('Unable to remove AdMob banner', error)
        })
    }
  }, [])

  return null
}
