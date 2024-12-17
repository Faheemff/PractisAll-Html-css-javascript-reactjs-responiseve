// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
    const submitHundler = (e)=> {
        e.preventDefault();
        console.log("submited");
        
    }
  return (
    <div>
      <form onSubmit={(e)=> {
        console.log(username);
        
        submitHundler(e);
      }}>
        <input
        value={(e)=> {
          setUsername(e.target.value);
          
        }
        } 
        className='m-3 text-xl text-black px-6 py-2 rounded-md' type="text" placeholder='Enter your name' />
        <button className='bg-gray-500 px-4 py-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Form
