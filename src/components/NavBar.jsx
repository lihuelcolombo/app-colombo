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
            <li><Link to={`/category/hombre`}><a>Hombre</a></Link></li>
            <li><Link to={`/category/mujer`}><a>Mujer</a></Link></li>
            <li><Link to={`/category/calzado`}><a>Calzado</a></Link></li>
            <li><Link to={`/category/indumentaria`}><a>Indumentaria</a></Link></li>
            <li><Link to={`/category/accesorios`}><a>Accesorios</a></Link></li>
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

