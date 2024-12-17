/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                <header className='flex justify-between bg-emerald-600 px-7 py-3 items-center'>
                    <h1>About Page</h1>
                    <div className='flex gap-28 items-center'>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <Link to={'/project'}>Project</Link>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
