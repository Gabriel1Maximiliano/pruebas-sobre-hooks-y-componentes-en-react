import React, { useState } from 'react'
import { Small } from '../components/Small'
import { useCounter } from '../hook/useCounter'

export const Memorize = () => {
    const {counter,
        increment,
        decrement,
        reset}=useCounter(1);
        const [show, setShow] = useState(true)
  return (
    <>
  <h1>Counter: <Small value={ counter }/></h1>
  <hr></hr>
  <button className='btn btn-primary'
  onClick={increment}>+1</button>
  <button className='btn btn-outline-primary'  onClick={()  => setShow(!show)}>Shoe/hide {JSON.stringify(show)}</button>
    </>
  )
}
