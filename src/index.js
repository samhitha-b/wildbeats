import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/MainPage/Landing';
import Gallery from './components/Gallery/Gallery';
import Art from './components/Art/Art';
import Music from './components/Music/Music';
import Drama from './components/Drama/Drama';
import Dance from './components/Dance/Dance';
import Contact from './components/Contact/Contact';

ReactDOM.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/art" element={<Art/>} />
    <Route path="/music" element={<Music/>} />
    <Route path="/drama" element={<Drama/>} />
    <Route path="/dance" element={<Dance/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
  <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);

