// eslint-disable-next-line no-unused-vars
import React from 'react'
import Buttons from './Buttons';

const Header = () => {
  return (
    <>
      <header className=''>
        <nav className='flex justify-between items-center px-8 py-9'>
            <div className="logo text-[2.5vw] font-medium">
                <h1>Logo</h1>
            </div>
            <div className="center">
                <ul className='flex items-center gap-7'>
                    <li><a href="#" className='text-[.9vw] font-medium hover:text-gray-600'>Home</a></li>
                    <li><a href="#" className='text-[.9vw] font-medium hover:text-gray-600'>About</a></li>
                    <li><a href="#" className='text-[.9vw] font-medium hover:text-gray-600'>Contact</a></li>
                </ul>
            </div>
            <Buttons />
        </nav>
      </header>
    </>
  )
}

export default Header;