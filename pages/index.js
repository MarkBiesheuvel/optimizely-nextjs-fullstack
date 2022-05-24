import {
  createInstance,
  OptimizelyProvider,
  useDecision
} from '@optimizely/react-sdk'

const optimizely = createInstance({
  sdkKey: 'KVpGWnzPGKvvQ8yeEWmJZ',
})

const Content = () => {
  const [ decision ] = useDecision('sorting_algorithm')
  const { variables, variationKey } = decision;
  const { direction, field } = variables
  return (
    <div>
      Hello World!
      { variationKey === 'off' && <div>Off</div> }
      { variationKey === 'variation_1' && <div>Variation #1</div> }
      { variationKey === 'variation_2' && <div>Variation #2</div> }
      { variationKey === 'variation_3' && <div>Variation #3</div> }
      { variationKey === 'variation_4' && <div>Variation #4</div> }
    </div>
  )
}

const Page = () => {
  const id = 4
  const user = {
    id: id.toString(),
    attributes: {
      platform: 'React',
      device: 'Web'
    }
  }

  return (
    <OptimizelyProvider optimizely={optimizely} user={user}>
      <Content />
    </OptimizelyProvider>
  )
}

export default Page
