import React from 'react'
import './App.css'
import Toheader from './Component/Topheader/Toheader'
import Header from './Component/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'

function App() {
  return (
    <>
   
    
    <BrowserRouter>
    <Toheader />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path='/about'  element={<h1>About_component</h1>}/>
      <Route path='/classes' element={<h1>classes_component</h1>}/>
      <Route path='/teacher' element={<h1>Service_component</h1>}/>
       <Route path='/page' element={<h1>Page_component</h1>}/>
       <Route path='/blog' element={<h1>Blog_component</h1>}/>
       <Route path='/shop' element={<h1>Shop_component</h1>}/>
       <Route path='/contact' element={<h1>Contact_component</h1>}/>
       <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
	
    
 
    </>
  
  )
}

export default App