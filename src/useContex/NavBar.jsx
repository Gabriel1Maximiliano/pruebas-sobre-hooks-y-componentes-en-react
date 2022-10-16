import React from 'react'
import{Link,NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">useContext</Link>
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li>
         <NavLink to='/home'
         className={(args)=> `nav-link ${args.isActive ? 'active' : '' }`}>
         
          Home
         </NavLink>
         </li>
         <NavLink to='/about'
         className={(args)=> `nav-link ${args.isActive ? 'active' : '' }`}>
          About
         </NavLink>
         <NavLink to='/login'
         className={(args)=> `nav-link ${args.isActive ? 'active' : '' }`}>
          Login
         </NavLink>
         
        
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
