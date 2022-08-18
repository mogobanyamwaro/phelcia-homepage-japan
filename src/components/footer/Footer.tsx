import React from "react";
import "./style.css";
function Footer() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex pb-5 md:pb-0 flex-col items-center">
      <p className="follow__text">Follow us;</p>
      <div className="flex">
        <div
          onClick={() =>
            openInNewTab(
              "https://instagram.com/susan4selfcare?utm_medium=copy_link"
            )
          }
          className="mr-5"
        >
          <img className="footer__icon" src="/images/instagram.png" alt="" />
        </div>
        <div
          onClick={() =>
            openInNewTab("https://www.facebook.com/Susan4selfcare")
          }
          className="mr-5"
        >
          <img className="footer__icon" src="/images/facebook.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
