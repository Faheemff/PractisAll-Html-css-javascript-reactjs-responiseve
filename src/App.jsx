/* eslint-disable no-unused-vars */
import React from 'react'
import Form from './Form'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/project' element={<Project />}/>
      </Routes>
    </div>
  )
}

export default App


