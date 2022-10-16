import React, { useState } from 'react'

export const SimpleForm = () => {

    const [input, setInput] = useState({})

   const handleInputChange = ({target}) => {
       const{name,value} = target;
       console.log(value)
      setInput({
        ...input,
        [name]: value
      })
   }
console.log(input)
  return (
    <div>
        <p>Simple Form</p>
        <input
        type='text'
        placeholder='agregue name'
        name='name'
        value={undefined}
        
        className='form-control'
        onChange={handleInputChange}
        />
         <input
        type='email'
        placeholder='email'
       value={undefined}
        name='email'
        className='form-control mt-2'
        onChange={handleInputChange}
        />
        
    </div>
  )
}
