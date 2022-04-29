import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Handball Gear</a>
      </div>
      <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>                    
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
            <li><a>Item 5</a></li>
          </ul>
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




