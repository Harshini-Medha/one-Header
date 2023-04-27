import React from 'react'
import {Link} from'react-router-dom'


const Header = () => {
  return (
    <div className='w-full h-24v flex justify-center items-center bg-cyan-600 text-3xl font-bold'>Header
    
    <div className="flex w-1/2 justify-evenly text-white ">

<Link to="/contact">Contact</Link>
<Link to="/aboutus">Aboutus</Link>
<Link to="/">landing</Link>

    </div>
    
    </div>
  )
}

export default Header