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
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <Link to={`/category/hombre`}><li><a>Hombre</a></li></Link>        
            <Link to={`/category/mujer`}><li><a>Mujer</a></li></Link>
            <Link to={`/category/calzado`}><li><a>Calzado</a></li></Link>
            <Link to={`/category/indumentaria`}><li><a>Indumentaria</a></li></Link>
            <Link to={`/category/accesorios`}><li><a>Accesorios</a></li></Link>          
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

