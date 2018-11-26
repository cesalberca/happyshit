import React, { useState } from 'react'
import { Dislike } from '../components/Dislike.component'

export const EmotionContainer: React.FunctionComponent<{}> = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dislike onClick={() => setCount(count + 1)} />
      <span className="absolute f3 top-0">{count}</span>
    </>
  )
}
