import '../public/fonts/inter.css'
import '../styles/globals.css'
import '../styles/cursors.css'
import '../styles/progressbar.css'
import Router from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import nprogress from 'nprogress'

Router.events.on('routeChangeStart', nprogress.start)
Router.events.on('routeChangeError', nprogress.done)
Router.events.on('routeChangeComplete', nprogress.done)

function MyApp({ Component, pageProps }) {

  return (
    <div>
    <Head>
      <title>Green Complaint | Report environment problems</title>
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <Script src="/foley.js"></Script>
    </Head>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
