import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { MetaFunction } from 'react-router'

import normalizeUrl from '~/styles/normalize.css?url'
import tailwindUrl from '~/styles/tailwind.css?url'
import fontsUrl from '~/styles/fonts.css?url'
import stylesUrl from '~/styles/styles.css?url'

import Header from '~/components/Header'

export const meta: MetaFunction = () => {
  return [
    { title: 'F1 Champs' },
    { name: 'description', content: 'Are you a true Formula 1 champion?' },
  ]
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: normalizeUrl },
    { rel: 'stylesheet', href: tailwindUrl },
    { rel: 'stylesheet', href: fontsUrl },
    { rel: 'stylesheet', href: stylesUrl },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
        <meta name="theme-color" content="#EF4444" />
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
        />
      </head>
      <body>
        <main className="h-full flex justify-center items-center">
          <article className="game relative h-full flex flex-col max-w-md text-center container mx-auto pt-8 px-8 bg-white shadow-lg">
            <Header />
            {children}
          </article>
        </main>
        <ScrollRestoration />
        <Scripts />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title="GTM iframe"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMB3FR2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
