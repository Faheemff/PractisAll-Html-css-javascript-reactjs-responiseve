/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Towaybinding = () => {
    const [username, setUsername] = useState('')
  return (
    <div>
      <form>
        <input
        value={username}
        className='m-3 text-xl text-black px-6 py-2 rounded-md' type="text" placeholder='Enter your name' />
        <button className='bg-gray-500 px-4 py-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Towaybinding
