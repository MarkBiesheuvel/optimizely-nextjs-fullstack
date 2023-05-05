import { useEffect, useState, } from 'react';
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

  // NOTE: this might give hydration errors in the dev build, but not the production build

  if (clientReady) {
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
