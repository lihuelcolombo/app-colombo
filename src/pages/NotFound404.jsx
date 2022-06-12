import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div className="flex justify-center card-spacing card lg:card-side bg-base-100 shadow-xl">
            <div className='' >
              <h1 className='text-4xl m-2' >OOPS!</h1>                
              <p className='text-xl m-2' >Esta página no contiene elementos, para comprar, vuelve al inicio:</p>
              <p className='text-2xl btn m-2'><Link to={'/'}>Volver al inicio</Link></p>
            </div>
        </div>
  )
}

export default NotFound404