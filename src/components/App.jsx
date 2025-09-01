import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from '../components/Navigation'
import Footer from '../components/../components/Footer.jsxFooter.jsx'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index={ <Home /> }></Route>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/gallery" element={ <Gallery />}></Route>
        </Routes>
       </BrowserRouter>
       <Footer />
    </div>
  );
}