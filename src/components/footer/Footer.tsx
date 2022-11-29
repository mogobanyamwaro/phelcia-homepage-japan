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
              " https://www.instagram.com/invites/contact/?i=vpmxjdeped2i&utm_content=pgj3f7g"
            )
          }
          className="mr-5"
        >
          <img className="footer__icon" src="/images/instagram.png" alt="" />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              "https://www.facebook.com/profile.php?id=100087218777911"
            )
          }
          className="mr-5"
        >
          <img className="footer__icon" src="/images/facebook.png" alt="" />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              " https://www.tiktok.com/@qlivingtomikenkou1?_t=8WtK9Em0Yb4&_r=1"
            )
          }
          className="mr-5"
        >
          <img className="footer__icon" src="/images/twitter.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
