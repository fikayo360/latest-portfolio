import React from "react";
import Slider from "react-slick";
import './track.css'

function AutoPlay() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="textCont">
          <h3 className="trackText">API</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText fadeTrack">CLIS</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText">WEB SCRAPPING</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText fadeTrack">AUTOMATION</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText">REACT </h3>
        </div>
        <div className="textCont">
          <h3 className="trackText fadeTrack">REACT-NATIVE</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText">NODE JS</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText fadeTrack">DEV TOOLING</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText">CI/CD</h3>
        </div>
        <div className="textCont">
          <h3 className="trackText fadeTrack">CONTAINERIZATION</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
