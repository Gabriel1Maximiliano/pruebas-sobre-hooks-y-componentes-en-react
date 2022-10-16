import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

export const Quotes = ({quote,author}) => {
  const [size, setSize] = useState({})  
  const pRef  = useRef();

  useLayoutEffect(() => {
    const{height,width}=pRef.current.getBoundingClientRect();
    console.log(height)
setSize({
  width,
  height
})
   
  }, [])
 
  return (
    <>
    <blockquote className='blockquote text-end' style={{display:'flex'}}>
    <p  ref={pRef} className='mb-1' >{quote}</p>
    <footer className='blockquote-footer' >{author}</footer>
</blockquote>
<code>{JSON.stringify(size)}</code>
</>
  )
}

Quotes.prototype={
    quote:PropTypes.string,
    author: PropTypes.string

}
