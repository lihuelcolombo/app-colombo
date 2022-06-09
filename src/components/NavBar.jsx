import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/'>
          <a className="btn btn-ghost normal-case text-xl">Handball Gear</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
            <li><Link to={`/category/calzado`}><a>Calzado</a></Link></li>
            <li><Link to={`/category/indumentaria`}><a>Indumentaria</a></Link></li>
            <li><Link to={`/category/accesorios`}><a>Accesorios</a></Link></li>
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

