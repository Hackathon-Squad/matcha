import { type AppProps } from 'next/app'

import { UserProvider } from '@/context/UserContext'

import '@/styles/index.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
