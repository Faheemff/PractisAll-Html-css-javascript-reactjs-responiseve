// eslint-disable-next-line no-unused-vars
import React from 'react'

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
            <div className='side flex items-center gap-5'>
                <button type='button' className='px-8 py-4 bg-blue-700 rounded-md text-[1vw] hover:bg-gray-700 text-white'>Login</button>
                <button type='button' className='px-8 py-4 bg-blue-700 rounded-md text-[1vw] hover:bg-gray-700 text-white'>Sign in</button>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header;