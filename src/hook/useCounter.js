import { useState } from "react"


export const useCounter = (initialValue=1) => {

   const [counter, setCounter] = useState(initialValue);

   const increment = (value=1) => {
    setCounter( (current)=>current +value );
   };
   const decrement = (value=1) => {
      if(counter === 1) {
         setCounter(1);
      }else{
         
         setCounter( (current)=>current - value );
      }

   };
   const reset = () => {
    setCounter(initialValue)
   }

   return{
    counter,
    increment,
    decrement,
    reset
   }
}