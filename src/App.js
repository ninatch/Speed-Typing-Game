import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/Global';
import Input from './components/Input'
import useFocus from './utils/useFocus';

function App() {
  
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [isWordCountDisplayed, setIsWordCountDisplayed] = useState(false)
  const [receivedData, setReceivedData] = useState('')
  const [inputRef, setInputFocus] = useFocus()

  const collectData = (data) => {
    setReceivedData(data)
    console.log(receivedData)
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
    setIsWordCountDisplayed(false)
    setTimeRemaining(10)
    Promise.resolve(enableOrDisable())
      .then(setInputFocus)
    showOrHide()
    setInputFocus()
  }

  const endGame = () => {
    setIsWordCountDisplayed(true)
    enableOrDisable()
    showOrHide()
    collectData()
  }

  return (
    <div className='container'>
      <GlobalStyles />
      <h2>How many words can you type in 10 seconds?</h2>
      <p>Remaining time: {timeRemaining}</p>
      {isWordCountDisplayed && <p>You've typed {receivedData} words!</p>}
      <Input isDisabled={isDisabled} focusRef={inputRef} collectData={collectData}/>
      <button onClick={startGame} hidden={isHidden}>Start</button>
    </div>
  )
}

export default App
