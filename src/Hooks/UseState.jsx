// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// import Buttons from '../Component/Buttons'

const UseState = () => {
    let [a,b] = useState(90)
  return (
    <div>
      <h1 className='pl-44 text-2xl'>{a}</h1>
      <button onClick={()=>{b(a+1)}} type='button' className='px-7 py-2 rounded-lg bg-red-800 text-white ml-64 text-2xl'>Click</button>

      {/*Sedding data in other compnent*/}

      
    </div>
  )
}

export default UseState
