import React, { useState } from 'react'
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Words from './pages/Words';
import About from './components/About'
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/category" element={<Words/>}/>
        <Route path="/category/:category" element={<Words/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
