import React from 'react'
import { useFetch } from '../../hook/useFetch'
import {useCounter} from '../../hook/useCounter'  
import { Loading } from '../Loading';
import { Quotes } from '../Quotes';

export const MultipleCustomHooks = () => {
    const{increment,decrement,reset,counter}=useCounter();

    const {data,isLoading,hasError}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote,author} = !!data && data[0];
  return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr/>
    {
        isLoading ? (  
            <Loading />
        ):(
           <Quotes quote={quote} author={author} />
        )
    }
    <button  disabled={isLoading} className='btn btn-dark'onClick={increment}>Next Quote</button>
    <button  disabled={isLoading} className='btn btn-dark'onClick={reset}>Reset Quote</button>
    <button  disabled={isLoading} className='btn btn-dark'onClick={decrement}>Back Quote</button>
    </>
  )
}
