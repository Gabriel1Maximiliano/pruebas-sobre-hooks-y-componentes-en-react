import React from 'react'
import { UseForm } from '../hook/UseForm'

export const FormwhithCustomHooks = () => {

    const { input,handleInputChange,handleReset }=UseForm({
        name:'',
        email:''
    })

   // const{name,email}=input
  return (
    <div>
        <p>Formulario con custom hooks</p>
        <input
        type='text'
        placeholder='agregue name'
        name='name'
        value={input.name}
        className='form-control'
        onChange={handleInputChange}
        />
         <input
        type='email'
        placeholder='email'
       
        name='email'
        value={input.email}
        className='form-control mt-2'
        onChange={handleInputChange}
        />
        <hr></hr>
        <button className='btn btn-danger mt-2'  onClick={handleReset} >Borrar</button>
    </div>
  )
}
