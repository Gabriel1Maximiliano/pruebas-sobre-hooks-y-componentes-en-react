import React, { useState } from 'react'

export const ToDoAdd = ({handleAddToDo,initialValue = {}}) => {
   
    const [input, setInput] = useState(initialValue);
    
    const handleInput = (e) => {
   
      

      setInput({
        ...input,
        [e.target.name]:e.target.value
      })
     
    }
   
   
    const handleSubmit = (e) => {
      e.preventDefault(e);
      if(Object.entries(input).length < 1) alert('ingrese una task')
      const newToDo = {
        id: new Date().getTime(),
        description: input.description,
        done: false
      }
      handleAddToDo(newToDo);
     setInput(undefined)
     
       
    }
  return (
    <>
    <form onSubmit={handleSubmit}   >
                    <input
                    type='text'
                    placeholder='que ha que hacer'
                    className='form-control'
                    name='description'
                    value={undefined}
                    onChange={handleInput}
                    >
                    </input>

                    <button type='submit' 
                    className='btn btn-outline-primary mt-2'
                   >Agregar tarea </button>
                </form>
    </>
  )
}
