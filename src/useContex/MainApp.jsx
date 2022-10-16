import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {LoggingPage} from './LoggingPage'
import {AboutPages} from './AboutPages'
import {HomePage} from './HomePage'
import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';
export const MainApp = () => {
    
  return (
    <UserProvider>
    <h1>MainApp</h1>
    <hr></hr>
   <NavBar />
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<AboutPages />} />
      <Route path='/login' element={<LoggingPage />} />
    </Routes>
    </UserProvider>
  )
}
