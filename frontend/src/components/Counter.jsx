import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button type='button' onClick={() => setCount(oldCount => oldCount + 1)}>
      count is: {count}
    </button>
  )
}

export default Counter
