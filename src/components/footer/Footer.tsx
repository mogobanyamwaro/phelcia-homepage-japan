import React from "react";
import "./style.css";
function Footer() {
  return (
    <div className="flex pb-5 md:pb-0 flex-col items-center">
      <p className="follow__text">Follow us;</p>
      <div className="flex">
        <div className="mr-5">
          <img className="footer__icon" src="/images/twitter.png" alt="" />
        </div>
        <div className="mr-5">
          <img className="footer__icon" src="/images/instagram.png" alt="" />
        </div>
        <div className="mr-5">
          <img className="footer__icon" src="/images/facebook.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
