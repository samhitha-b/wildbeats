import React, { useState } from "react";
import "./Events.css";
const Events = () => {
  // const dDay = new Date(2022, 2, 29, 0, 0, 0, 0).getTime();
  // const timerFunc = () => {
  //   const now = new Date().getTime();
  //   const diff = dDay - now;
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  //   let d = document.querySelector(".days");
  //   let h = document.querySelector(".hours");
  //   let m = document.querySelector(".minutes");
  //   let s = document.querySelector(".seconds");
  //   let textD = Math.floor(diff / day);
  //   let textH = Math.floor((diff % day) / hour);
  //   let textM = Math.floor((diff % hour) / minute);
  //   let textS = Math.floor((diff % minute) / second);
  //   // console.log(textD, textH, textM, textS);
  //   if (textD < 0) {
  //     d.innerText = "00";
  //     h.innerText = "00";
  //     m.innerText = "00";
  //     s.innerText = "00";
  //   } else {
  //     d.innerText = textD;
  //     h.innerText = textH;
  //     m.innerText = textM;
  //     s.innerText = textS;
  //   }
  // };
  // setInterval(timerFunc, 1000);
  // timerFunc();
  return (
    <div className="container-upcomming">
      <div className="header">
        <h1>Upcoming Events</h1>
      </div>
      {/* <div className="timer-container">
        <div className="timer-head">
          <div className="timer-head1">
            <span className="dash"></span>
            <h1>ENLACE</h1>
            <span className="dash"></span>
          </div>
        </div>
        <div className="timer">
          <div className="timer1">
            <div className="digit-container">
              <h2 className="days">00</h2>
              <h3>days</h3>
            </div>
            <div className="digit-container">
              <h2 className="hours">00</h2>
              <h3>hours</h3>
            </div>
            <div className="digit-container">
              <h2 className="minutes">00</h2>
              <h3>minutes</h3>
            </div>
            <div className="digit-container">
              <h2 className="seconds">00</h2>
              <h3>seconds</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="content">
        <h1>Look out for exciting events in the future</h1>
      </div>
    </div>
  );
};
export default Events;
