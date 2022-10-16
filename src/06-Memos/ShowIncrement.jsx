import React from 'react'

export const ShowIncrement = ({increment}) => {
  return (
    <button
    className='btn-btn-danger'
    onClick={() => 
        increment()}
    >Incrementar</button>
  )
}
