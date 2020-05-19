import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
  const {name} = props;
  return (
    <nav className='nav'>
      <ul type='none' style={{padding:0}}>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
      </ul>
      <div className='nav-logout'>
         {
           name && 
           <div>
           Hello {name}  
           <button onClick={props.logoutUser}>Logout</button>
          </div>
         } 
        
        </div>
        <div className='clear-float'></div>
    </nav>
  )
}