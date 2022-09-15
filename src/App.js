import { useEffect, useState, useRef } from 'react';
import { GlobalStyles } from './styles/Global';
import Input from './components/Input'
import useFocus from './utils/useFocus';

function App() {
  
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [inputRef, setInputFocus] = useFocus()

  const collectData = (data) => {
    const numOfWords = data.split(' ')
    console.log(numOfWords)
    // console.log(data)
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      startCountdown()
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])
  
  const startCountdown = () => {
    setTimeout(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
    }, 1000)
  }
  
  const enableOrDisable = () => {
    setIsDisabled(prevIsDisabled => !prevIsDisabled)
  }

  const showOrHide = () => {
    setIsHidden(prevIsHidden => !prevIsHidden)
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(10)
    enableOrDisable()
    showOrHide()
    setInputFocus()
  }

  const endGame = () => {
    enableOrDisable()
    showOrHide()
    collectData()
  }

  return (
    <div className='container'>
      <GlobalStyles />
      <h2>How many words can you type in 10 seconds?</h2>
      <p>Remaining time: {timeRemaining}</p>
      <Input isDisabled={isDisabled} ref={inputRef} collectData={collectData}/>
      <button onClick={startGame} hidden={isHidden}>Start</button>
    </div>
  )
}

export default App
