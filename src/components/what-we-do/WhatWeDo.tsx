import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function WhatWeDo() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="flex flex-col   w-full
     px-5 md:flex-row md:max-w-6xl md:h-auto
      md:items-center md:mx-auto"
    >
      <div>
        <h1 className=" what__we__do ">What we do</h1>
        <p className="text-secondary what__we_do_text font-Poppins">
          We are committed to help you address various health concerns by
          investing in tried and tested health products. In addition, you can
          attain financial freedom by choosing to live healthy. Sounds good?
          Join us today and be an active participant in promoting all round
          wellness
        </p>
      </div>
      <div className="my-3 md:my-0 md:pl-32">
        {" "}
        <button
          onClick={() =>
            openInNewTab("http://pageshop.myqsciences.com/GA11748")
          }
        >
          Start Your Own Shop
        </button>
      </div>
    </div>
  );
}

export default WhatWeDo;
