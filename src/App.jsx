import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Chip, Radio } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0)


  function Dismissible() {
    const [show, setShow] = useState(false);
   
    return (
      <Fragment>
        {!show && (
          <button
            variant="gradient"
            onClick={() => setShow(true)}
          >
            Show Chip
          </button>
        )}
      <Chip
        variant="gradient"
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 50 },
        }}
        dismissible={{
          onClose: () => setTimeout( () => setShow(false), 200 )
        }}
        value='Hide Chip'
      />
      </Fragment>
    );
  }

  return (
    <div className="App">      
      <div id='logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click count is {count}
        </button>
      </div>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <br/>
      <Dismissible />
    </div>
  )
}

export default App
