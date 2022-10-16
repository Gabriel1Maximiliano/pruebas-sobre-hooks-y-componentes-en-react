import React from 'react'
import { useCounter } from '../../hook/useCounter'

export const CounterWithCustomHooks = () => {
 const { counter ,increment,decrement,reset} =useCounter();

  return (
    <>
    <p>Counter with Hook: { counter }</p>
    <button className='btn btn-primary' onClick={increment} >+1</button>
    <button className='btn btn-primary' onClick={reset} >Reset</button>
    <button className='btn btn-primary' onClick={decrement}>-1</button>
    </>
  )
}