import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-black text-white p-2'>
            <ul className=' flex gap-4 justify-end mr-[20px]'>
                <Link to='/' className='font-semibold   border p-2 hover:bg-white hover:text-black'>First page</Link>
                <Link to='/secondpage' className='font-semibold   border p-2 hover:bg-white hover:text-black'>Second Page</Link>
            </ul>
        </div>
    )
}

export default Navbar
