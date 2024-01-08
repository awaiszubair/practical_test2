import { useState } from 'react'

import Main from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
