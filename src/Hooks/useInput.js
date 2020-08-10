import { useState } from 'react'

function useInput(intialValue = '') {
    const [value, setValue] = useState(intialValue);
    const [isError, setIsError] = useState(false);
    const bindProps = {
        value,
        onChange: e => {
            setValue(e.target.value);
            setIsError(!e.target.value)
        }
    }
    return [value, bindProps, isError]
}

export default useInput
