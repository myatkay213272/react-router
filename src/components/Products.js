import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
   <>
     <div>
        <input type="text" placeholder='Search products'/>
    </div>

    <nav>
        <Link to='feactured'>Feactured</Link>
        <Link to='new'>new</Link>
    </nav>

    <Outlet/>
   </>
  )
}

export default Products