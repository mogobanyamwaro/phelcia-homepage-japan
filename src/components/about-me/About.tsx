import React from "react";
import "./style.css";
function About() {
  return (
    <div className=" px-5 md:mt-5 mt-3 md:flex md:max-w-6xl md:mx-auto md:justify-evenly md:items-center ">
      <div className="md:w-1/4">
        {" "}
        <h1 className="about__me">About Me</h1>
        <div className="flex justify-center items-center my-5 md:my-0 md:justify-start">
          {" "}
          <div className="image__container ">
            <img src="/images/profile.png" alt="" />
          </div>
        </div>
      </div>
      <div className="md:w-3/4">
        {" "}
        <p className="text-sm about__text">
          Hello there, my name is Susan an ambassador of natural health and
          wellness. Through the work I do, I aim to change the world by pushing
          for the use of sustainable and healthy products. You can be part of
          this change by investing in our products. Would you like to join me?
        </p>
      </div>
    </div>
  );
}

export default About;
