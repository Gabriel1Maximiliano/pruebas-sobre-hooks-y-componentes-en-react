import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './context/UserContext'

export const AboutPages = () => {

  

  return (
    <>
    <h1>AboutPages</h1>
    <Link to='/home'>Volver a la pantalla principal</Link>
    
    </>
  )
}
