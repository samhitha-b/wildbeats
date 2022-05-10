import React from 'react';
import './Gallery.css';

function Heading(){
  return (
    <div className="gallery-heading">
        <h1>GALLERY</h1>
    </div>
  )
}

function PhotoCollage(){
  return (
    <div className="photos">
        <div className="event">
            <span className="event-name">Diwali</span>
            <div className="image spans-cols-2" id="image-1"></div>
            <div className="image spans-rows-2" id="image-2"></div>
            <div className="image spans-rows-2" id="image-3"></div>
            <div className="image" id="image-4"></div>
            <div className="image spans-cols-2" id="image-5"></div>
        </div>
        <div className="event">
          <span className="event-name">Independence day</span>
            <div className="image spans-cols-2" id="image-6"></div>
            <div className="image spans-rows-2" id="image-7"></div>
            <div className="image spans-rows-2" id="image-8"></div>
            <div className="image" id="image-9"></div>
            <div className="image spans-cols-2" id="image-10"></div>
        </div>
        <div className="event">
            <span className="event-name">Sankranti</span>
            <div className="image spans-cols-2" id="image-11"></div>
            <div className="image spans-rows-2" id="image-12"></div>
            <div className="image spans-rows-2" id="image-13"></div>
            <div className="image" id="image-14"></div>
            <div className="image spans-cols-2" id="image-15"></div>
        </div>
        <div className="event">
            <span className="event-name">Onam</span>
            <div className="image spans-cols-2" id="image-16"></div>
            <div className="image spans-rows-2" id="image-17"></div>
            <div className="image spans-rows-2" id="image-18"></div>
            <div className="image" id="image-19"></div>
            <div className="image spans-cols-2" id="image-20"></div>
        </div>
        <div className="event">
            <span className="event-name">Enlace</span>
            <div className="image spans-cols-2" id="image-21"></div>
            <div className="image spans-rows-2" id="image-22"></div>
            <div className="image spans-rows-2" id="image-23"></div>
            <div className="image" id="image-24"></div>
            <div className="image spans-cols-2" id="image-25"></div>
        </div>
        <div className="event">
            <span className="event-name">Ganesh Chathurti</span>
            <div className="image spans-cols-2" id="image-26"></div>
            <div className="image spans-rows-2" id="image-27"></div>
            <div className="image spans-rows-2" id="image-28"></div>
            <div className="image" id="image-29"></div>
            <div className="image spans-cols-2" id="image-30"></div>
        </div>
    </div>
  )
}

function Gallery(){
  return (
    <>
      <Heading />
      <PhotoCollage />
    </>
  )
}

export default Gallery
