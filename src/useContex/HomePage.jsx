import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './context/UserContext'
export const HomePage = () => {
  const {user} = useContext( UserContext )
  return (
    <>
    <h1>HomePage<small>{user?.name}</small></h1>
    <hr></hr>
    {/*<Link to='/home'>Volver a la pantalla principal</Link>*/}
    <pre aria-label='pre'>
       {JSON.stringify(user,null,3)}
    </pre>
    </>
  )
}
