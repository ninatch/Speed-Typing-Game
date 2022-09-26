import React, { useEffect, useState } from 'react'
import { StyledInput } from '../styles/components/Input.styled'

const Input = ({isDisabled, collectData, focusRef}) => {

    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    
    const countWords = () => {
        const numOfWords = input.split(' ').length
        collectData(numOfWords)
    }
    
    useEffect(() => {
        countWords()
    }, [input])
    
    return (
        <StyledInput 
            type='text' 
            name='text-box'
            value={input} 
            onChange={handleChange} 
            disabled={isDisabled}
            ref={focusRef}
        >
        </StyledInput>
    )
}

export default Input