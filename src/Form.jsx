/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Form = () => {

  const [user, setUser] = useState('')

  const onSubmit = (e)=> {
    e.preventDefault();
    console.log(user);
    setUser('')
  }
  return (
    <div>
      <form onSubmit={(e)=> {
        onSubmit(e);
      }}>
        <input
        value={user}
        onChange={(e)=> {
          setUser(e.target.value);
        }}
        className='m-3 text-xl text-black px-6 py-2 rounded-md' type="text" placeholder='Enter your name' />
        <button className='bg-gray-500 px-4 py-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Form
