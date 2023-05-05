import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Container, Navbar, Nav } from 'react-bootstrap';
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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lorum-ipsum">Lorum ipsum</Nav.Link>
            <Nav.Link href="/office-ipsum">Office ipsum</Nav.Link>
            <Nav.Link href="/cat-ipsum">Cat ipsum</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Component optimizely={optimizely} user={user} {...pageProps} />
    </Container>
  </>);
};

export default App;
