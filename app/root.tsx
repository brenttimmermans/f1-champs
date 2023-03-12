import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'

import normalize from '~/styles/normalize.css'
import tailwind from '~/styles/tailwind.css'
import fonts from '~/styles/fonts.css'
import styles from '~/styles/styles.css'

import Header from '~/components/Header'

export const meta: MetaFunction = () => {
  return { title: 'F1 Champs' }
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: normalize },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: fonts },
    { rel: 'stylesheet', href: styles },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="description" content="Are you a true Formula 1 champion?" />
        <meta property="og:title" content="F1 Champs" />
        <meta
          property="og:description"
          content="Are you a true Formula 1 champion?"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://f1-champs.brenttimmermans.com"
        />
        <meta name="theme-color" content="##EF4444" />

        <Meta />
        <Links />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KMB3FR2');
            `,
          }}
        ></script>
      </head>
      <body>
        <main className="h-full flex justify-center items-center">
          <article className="game relative h-full flex flex-col max-w-md text-center container mx-auto pt-8 px-8 bg-white shadow-lg">
            <Header />
            <Outlet />
          </article>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title="GTM iframe"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMB3FR2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  )
}
