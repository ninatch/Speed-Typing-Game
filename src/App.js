import { useState } from 'react';
import { GlobalStyles } from './styles/Global';
import Input from './components/Input'

function App() {

  const [count, setCount] = useState(5)

  function countdown() {
    let myInterval = setInterval(() => {
      setCount((prevCount) => {
        if(count === 0){
          clearInterval(myInterval)
        } else {
          return prevCount - 1
        }
      }
    )}, 1000)
  }

  console.log(count)

  return (
    <div className='container'>
      <GlobalStyles />
      <h1>Speed Typing Game</h1>
      <p>{count}</p>
      <Input />
      <button onClick={countdown}>Start</button>
    </div>
  );
}

export default App;
