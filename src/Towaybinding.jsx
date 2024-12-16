/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Towaybinding = () => {
    const [username, setUsername] = useState('')

    const submit = (e)=> {
        e.preventDefault();
        console.log(username);
        setUsername(''); // Reset the input field after form submission.
  
    }
    
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e);
      }}>
        <input
        value={username}
        onChange={(e)=> {
            setUsername(e.target.value);
            
        }}
        className='m-3 text-xl text-black px-6 py-2 rounded-md' type="text" placeholder='Enter your name' />
        <button className='bg-gray-500 px-4 py-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Towaybinding
