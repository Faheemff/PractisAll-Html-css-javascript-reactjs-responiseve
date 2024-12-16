/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
// import Towaybinding from './Towaybinding'
// import Form from './Form'

const App = () => {
  return (
    <div>
      {/* <Form /> */}
      {/* <Towaybinding /> */}
      <div className='p-10'>
        <Card user={"Faheem"} age={19} city={"Pakistan"} />
      </div>
    </div>
  )
}

export default App

