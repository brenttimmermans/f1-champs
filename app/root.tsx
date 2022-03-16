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
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
