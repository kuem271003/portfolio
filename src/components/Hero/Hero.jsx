import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/kinh.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={heroImage} alt="Hero" />
      <h1><span>Welcome to My Portfolio</span></h1>
      <h2><span>I'm Phương Nguyễn</span>, a Full Stack Developer in Vietnam</h2>
      <p>
        I'm a passionate developer with a knack for creating stunning web
        applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me!</div>
        <div className="hero-resume">View My Resume!</div>
      </div>
    </div>
  );
};

export default Hero;
