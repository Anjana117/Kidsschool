import React from 'react'
import './App.css'
import Toheader from './Component/Topheader/Toheader'
import Header from './Component/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Class from './Component/Class/Class'
import Teachers from './Component/Teachers/Teachers'
import Pages from './Component/Pages/Pages'
import Blog from './Component/Blog/Blog'
import Shop from './Component/Shop/Shop'
import Contact from './Component/Contact/Contact'


function App() {
  return (
    <>
   
    
    <BrowserRouter>
    <Toheader />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path='/about'  element={<About />}></Route>
      <Route path='/classes' element={<Class />}/>
      <Route path='/teacher' element={<Teachers />}/>
       <Route path='/gallery' element={<Pages />}/>
       <Route path='/blog' element={<Blog />}/>
       <Route path='/shop' element={<Shop />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
	
    
 
    </>
  
  )
}

export default App