import { useState, useEffect } from 'react'
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
      <div>The sort order is {field} {direction}</div>
      <div>{ variationKey }</div>
    </div>
  )
}

const Page = () => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  })

  const id = 6
  const user = {
    id: id.toString(),
    attributes: {
      platform: 'React',
      device: 'Web'
    }
  }

  if (showChild) {
    return (
      <OptimizelyProvider optimizely={optimizely} user={user}>
        <Content />
      </OptimizelyProvider>
    )
  } else {
    return <></>
  }
}

export default Page
