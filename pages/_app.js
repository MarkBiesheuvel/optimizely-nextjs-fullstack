import Head from 'next/head';
import {createInstance} from '@optimizely/react-sdk';

const optimizely = createInstance({
  sdkKey: 'KVpGWnzPGKvvQ8yeEWmJZ',
});

const App = ({ Component, pageProps }) => {
  const user = {
    id: 'user2',
    attributes: {
      platform: 'React',
      device: 'Web'
    }
  };

  return (<>
    <Head>
      <title>Optimizely Next.js Full Stack</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component optimizely={optimizely} user={user} {...pageProps} />
  </>);
};

export default App;
