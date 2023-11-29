import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/stuff")
      .then(r => r.json())
      .then(json => setCount(json.a));
  }, []);
  return (
    <>
      <div>Count is: {count}
      </div>
    </>
  )
}

export default App
