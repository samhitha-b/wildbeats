import React from 'react';
import ReactDOM from 'react-dom';
import './gallery.css';

function Welcome(){
  return (
    <div className="landing">
        <div className="gallery-home">
            <h1>Gallery</h1>
        </div>
    </div>
  )
}

function PhotoCollage(){
  return (
    <div className="photos">
        <div className="event">
            <div className="image spans-cols-2" id="image-1"><h3 className="caption">Diwali '19</h3></div>
            <div className="image spans-rows-2" id="image-2"><h3 className="caption">Onam '19</h3></div>
            <div className="image spans-rows-2" id="image-3"><h3 className="caption">Republic Day '19</h3></div>
            <div className="image" id="image-4"><h3 className="caption">Independence Day '19</h3></div>
            <div className="image spans-cols-2" id="image-5"><h3 className="caption">Sankranti '20</h3></div>
        </div>
        <div className="event">
            <div className="image spans-cols-2" id="image-6"><h3 className="caption">Independence Day '18</h3></div>
            <div className="image spans-rows-2" id="image-7"><h3 className="caption">Republic Day '18</h3></div>
            <div className="image spans-rows-2" id="image-8"><h3 className="caption">ENLACE '18</h3></div>
            <div className="image" id="image-9"><h3 className="caption">Ek Bharat Shreshtha Bharat</h3></div>
            <div className="image spans-cols-2" id="image-10"><h3 className="caption">Traditional Day '18</h3></div>
        </div>
    </div>
  )
}

function Gallery(){
  return (
    <>
      <Welcome />
      <PhotoCollage />
    </>
  )
}

export default Gallery;
