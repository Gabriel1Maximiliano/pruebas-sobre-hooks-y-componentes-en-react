import { useState } from "react";


export const UseForm = (initialValue={}) => {
    
    const [input, setInput] = useState(initialValue)

    const handleInputChange = ({target}) => {
        const{name,value} = target;
        console.log(value)
       setInput({
         ...input,
         [name]: value
       })
       console.log(input)
    }
    const handleReset = () => {
        setInput(initialValue);
    }
    return{
        ...input,
        input,
        handleInputChange,
        handleReset
    }
}
