import React, { useMemo, useState } from 'react'

import { useCounter } from '../hook/useCounter'


const heavyStaff = (iterationNumber) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos....');
    
  }
  return`${iterationNumber} cantidad de iteraciones `
}
export const MemoHook = () => {
    const {counter,
        increment,
        }=useCounter(4000);
        const memorizedValue =useMemo(() => heavyStaff(counter), [counter]);
        const [show, setShow] = useState(true)
  return (
    <>
  <h1>Counter: <small>{ counter }</small></h1>
  <hr></hr>
  <h3>{memorizedValue}</h3>
  <button className='btn btn-primary'
  onClick={increment}>+1</button>
  <button className='btn btn-outline-primary'  onClick={()  => setShow(!show)}>Shoe/hide {JSON.stringify(show)}</button>
    </>
  )
}
