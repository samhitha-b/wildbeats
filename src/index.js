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
    <Route exact path="/wildbeats" element={<Home/>} />
    <Route path="/wildbeats/gallery" element={<Gallery/>} />
    <Route path="/wildbeats/art" element={<Art/>} />
    <Route path="/wildbeats/music" element={<Music/>} />
    <Route path="/wildbeats/drama" element={<Drama/>} />
    <Route path="/wildbeats/dance" element={<Dance/>} />
    <Route path="/wildbeats/contact" element={<Contact/>} />
    </Routes>
  <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);

