import { useState, } from 'react';
import { Spinner } from 'react-bootstrap';
import {
  OptimizelyProvider,
  useDecision
} from '@optimizely/react-sdk';

const Content = ({optimizely}) => {
  // Get Optimizely decision
  const [ decision, clientReady ] = useDecision('sorting_algorithm');
  const { variables, variationKey } = decision;
  const { direction, field } = variables;

  // Set visible state equal to the clientReady boolean
  const [visible, setVisible] = useState(clientReady);

  // Update the visibility if the client becomes ready later
  if (!clientReady) {
    optimizely.onReady().then(() => {
      setVisible(true);
    })
  }

  if (visible) {
    // Actual content
    return (
      <>
        <div>The sort order is {field} {direction}</div>
        <div>{ variationKey }</div>
      </>
    );
  } else {
    // Loading icon
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  }
};

const Page = ({optimizely, user}) => {
  return (
    <>
      <h1>Hello {user.id}!</h1>
      <OptimizelyProvider optimizely={optimizely} user={user}>
        <Content optimizely={optimizely} />
      </OptimizelyProvider>
    </>
  )
};

export default Page;
