import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;