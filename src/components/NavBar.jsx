import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          Handball Gear
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
            <li><Link to={`/category/calzado`}>Calzado</Link></li>
            <li><Link to={`/category/indumentaria`}>Indumentaria</Link></li>
            <li><Link to={`/category/accesorios`}>Accesorios</Link></li>
        </ul>
      </div>
    <div className="flex-none">
        <div>
            <CartWidget></CartWidget>
        </div>
      </div>
  </div>
  )
}

export default NavBar

