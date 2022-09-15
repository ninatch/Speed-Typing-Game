import { useRef } from 'react'

const useFocus = () => {
    const htmlElRef = useRef()
    const setFocus = () => htmlElRef.current.focus()

    return [htmlElRef, setFocus] 
}

export default useFocus