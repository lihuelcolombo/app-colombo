import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link to='/'>
          <a class="btn btn-ghost normal-case text-xl">Handball Gear</a>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
          
      </div>
      <div class="flex-none">
        <div>
            <CartWidget></CartWidget>
        </div>
      </div>
    </div>
      
  )
}

export default NavBar




