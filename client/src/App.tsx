import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

interface VanyaPidor { count: number }

function App() {

  const [Pidor, setPidor] = useState(0)

  const incrementPidor = () => {
    let newPidor = Pidor + 1
    setPidor(newPidor)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={incrementPidor}>
          Ваня Костенко пидорас x{Pidor}
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
