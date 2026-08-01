import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  // FIX 1: useState must be capitalized (it's a named export)
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error)
      })


  }
)
    

  return (
    <>
      <h1> hello krish</h1>
      <p>JOKES: {jokes.length}</p>

      {/* FIX 2 & 3: Map needs a return statement or implicit return */}
      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h3>{joke.title}</h3>
            {/* FIX 4: Correct JSX syntax for displaying content */}
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App