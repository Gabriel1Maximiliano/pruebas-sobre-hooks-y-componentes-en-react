import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './context/UserContext'


export const LoggingPage = () => {

 const {user,setUser} = useContext(UserContext);
 
  return (
    <>
    <h1>LoggingPage</h1>
    {/*<Link to='/home'>Volver a la pantalla principal</Link>*/}

    <hr></hr>
    <pre aria-label='pre' >
    {JSON.stringify(user,null,3)}
    </pre>
     <button className='btn btn-primary'
     onClick={ () => setUser({id:'1234',name:'gabriel',email:'maximiliano@hotmail.com'}) }
   >
      Establecer Usuario
    </button> 
    </>
  )
}
