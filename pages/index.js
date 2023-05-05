import {
  OptimizelyProvider,
  useDecision
} from '@optimizely/react-sdk';

const Content = () => {
  const [ decision ] = useDecision('sorting_algorithm');
  const { variables, variationKey } = decision;
  const { direction, field } = variables;

  return (
    <>
      <h1>Hello World!</h1>
      <div>The sort order is {field} {direction}</div>
      <div>{ variationKey }</div>
    </>
  );
};

const Page = ({optimizely, user}) => {
  return (
    <OptimizelyProvider optimizely={optimizely} user={user}>
      <Content />
    </OptimizelyProvider>
  )
};

export default Page;
