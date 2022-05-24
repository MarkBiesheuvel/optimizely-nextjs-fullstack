import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Optimizely Next.js Full Stack</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
