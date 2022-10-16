import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('me volvi a dibujar :(')
  return (
    <div>
        <small>{ value }</small>
    </div>
  )
})
