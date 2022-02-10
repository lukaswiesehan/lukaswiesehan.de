import '@styles/globals.css'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {load as loadFathom, trackPageview} from 'fathom-client'

const MyApp = ({Component, pageProps}) => {
  const router = useRouter()

  useEffect(() => {
    loadFathom('ZAURHCOV', {
      includedDomains: ['preview.lukaswiesehan.de', 'lukaswiesehan.de'],
    })
    const onRouteChangeComplete = () => {
      trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
