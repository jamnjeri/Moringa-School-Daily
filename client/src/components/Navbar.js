import { useState } from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <img src={Logo} alt='logo' className='object-left' />

            <h1 className='w-full text-3xl font-bold text-[#F9500D]'>MORINGA.</h1>
            <ul className='md:flex'>
                <li className='p-4'>
                    <Link to="/login"> Home</Link>
                </li>
                <li className='p-4'>
                    <Link to="/login"> Login</Link>
                </li>
                <li className='p-4'>
                    <Link to='/signup'>Register</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar