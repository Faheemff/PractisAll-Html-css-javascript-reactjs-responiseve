// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white text-black text-center inline-block p-6 rounded-md'>
      <img className='h-32 w-32 rounded-full' src="" alt="" />
      <h1 className='text-2xl font-semibold mb-4'>Muhammad {props.user}</h1>
      <h2 className='mb-2 text-2xl font-bold'>{props.age}, {props.city}</h2>
      <button className='bg-emerald-700 text-white px-4 py-2 rounded-md'>Add Friend</button>
    </div>
  )
}

export default Card
