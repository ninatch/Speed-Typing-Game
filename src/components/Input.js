import React, { useEffect, useState } from 'react'
import { StyledInput } from '../styles/components/Input.styled'

const Input = ({isDisabled, collectData}) => {

    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    
    useEffect(() => {
        countWords()
    }, [input])
    
    const countWords = () => {
        const numOfWords = input.split(' ')
        collectData(numOfWords)
    }

    return (
        <StyledInput 
            type='text' 
            name='text-box'
            value={input} 
            onChange={handleChange} 
            disabled={isDisabled}
        >
        </StyledInput>
    )
}

export default Input