import { Analytics } from '@vercel/analytics/react'
import { Provider } from 'jotai'
import type { NextPage } from 'next'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { SWRConfig } from 'swr'
import { WagmiConfig } from 'wagmi'

import { SpLayout } from 'components/layout/Sp/SpLayout'

import { wagmiClient } from 'lib/clients/wagmi'
import { DEFAULT_SEO } from 'lib/config/seo'

import { useRouter } from 'next/router'
import 'styles/globals.css'

/* NOTE: The FreeportPage allows us to pass in custom layout components
import { withAppLayout } from 'components/layout/Layout'

const Index: FreeportPage = () => {
  return (
    <div>
      My page
    </div>
  )
}

Index.layout: FreeportLayoutFn = withAppLayout
*/
// eslint-disable-next-line @typescript-eslint/ban-types
export type FreeportPage<P = {}> = NextPage<P> & {
  layout?: FreeportLayoutFn
}

export type FreeportLayoutFn = (page: ReactElement) => ReactElement

// NOTE: Use FreeportLayoutProps for different layouts (e.g. components/layout/Layout.tsx)
export type FreeportLayoutProps = {
  children: ReactElement
}

// NOTE: Use FreeportSceneProps for react-three-fiber scenes
export type FreeportSceneProps = {
  backgroundColor?: string
  debug?: boolean
  environment?: string
}

// NOTE: Creating our own AppProps allows us to use our custom Component type
type FreeportAppProps = AppProps & {
  Component: FreeportPage
}

const MyApp = ({ Component, pageProps }: FreeportAppProps) => {
  // TODO: Can we only enable this for freeport.app and disable for our
  // PR apps?
  const enabled = process.env.NODE_ENV === 'production'
  const scriptProps = {
    src: '/analytics-api/v1/analytics.js',
    'data-api': '/analytics-api/v1/event',
  }

  // NOTE: Dynamic layout based on page. Default is an empty layout, but
  // can be overridden by defining a custom layout function in the page.
  // If testnet flag is enabled, we'll use the testnet layout (this may break things)
  const layout: FreeportLayoutFn =
    Component.layout || ((page: ReactElement) => page)
  const isBlogPage = useRouter().pathname.slice(0, 5) === '/blog'



  return (
    <>
      <PlausibleProvider
        domain="freeport.app"
        enabled={enabled}
        scriptProps={scriptProps}
      >
        <DefaultSeo
          {...DEFAULT_SEO}
          titleTemplate={isBlogPage ? '%s | freeport' : 'freeport | %s'}
        />
        <SWRConfig
          value={{
            onError: (err) => {
              console.error('SWR Error', err)
            },
          }}
        >
          <WagmiConfig client={wagmiClient}>
            {/* <Provider>{layout(<Component {...pageProps} />)}</Provider> */}
            <Provider>
              <SpLayout>
                <Component {...pageProps} />
              </SpLayout>
            </Provider>             
          </WagmiConfig>
        </SWRConfig>
      </PlausibleProvider>
      <Analytics />
    </>
  )
}

export default MyApp
