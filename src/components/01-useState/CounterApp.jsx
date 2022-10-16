import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
       counter1:10,
       counter2:20,
       counter3:30
    })

    const handelInput = ({target}) => {

        const{name,value}=target
        console.log(name+' '+ value)
       
          
            setState({
                ...state,
                [name]: state[name]+1
            })
        
    }
  return (
    <div>
        <h1>Contador</h1>

        <hr></hr>

        <h2>Contador1: {state.counter1}</h2>
        <h2>Contador2: {state.counter2}</h2>
        <h2>Contador3: {state.counter3}</h2>
        
         <p>Contador 1</p>
        <button className='btn-danger'  name='counter1' value='1' onClick={ (e) => handelInput(e)  }>+1</button>
        <p>Contador 2</p>
        <button className='btn-danger'  name='counter2' value='1' onClick={ (e) => handelInput(e)  }>+1</button>
        <p>Contador 3</p>
        <button className='btn-danger'  name='counter3' value='1' onClick={ (e) => handelInput(e)  }>+1</button>
    </div>
  )
}
