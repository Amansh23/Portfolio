import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'
import Carrier from './component/Carrier'
import Projects from './component/Projects'

const App = () => {
  return (
    <>
      <Layout/>
      <Routes> 
        <Route  index  element={<Home/>} />
        <Route  index  path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Carrier' element={<Carrier/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App