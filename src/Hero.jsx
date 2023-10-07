import React from "react";
import heroimg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Letterpress tonx cardigan quinoa. Edison bulb cray aesthetic, big
            mood offal four dollar toast vaporware umami sartorial. Bicycle
            rights normcore etsy 3 wolf moon salvia crucifix PBR&B tumblr DSA
            hexagon snackwave YOLO air plant gatekeep. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolorum, impedit?
          </p>
        </div>
        <div className="img-container">
          <img src={heroimg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
