import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function CallToAction() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col w-full px-5 md:flex-row md:max-w-6xl md:mx-auto md:h-auto">
      <p className="text-secondary  call__to__action__text">
        Do you want to{" "}
        <span style={{ fontWeight: 700 }} className="text-purpleLight">
          improve
        </span>{" "}
        your{" "}
        <span style={{ fontWeight: 700 }} className="text-purpleLight ">
          overall health?
        </span>{" "}
        Even better,{" "}
        <span style={{ fontWeight: 700 }} className="text-purpleLight ">
          be a driver
        </span>{" "}
        of natural health and wellness? Look no further. We offer{" "}
        <span style={{ fontWeight: 700 }} className="text-purpleLight ">
          {" "}
          products to guide you{" "}
        </span>{" "}
        and your loved ones through this journey!
      </p>
      <div className="my-3 md:pl-32">
        {" "}
        <button
          onClick={() =>
            openInNewTab("http://pageshop.myqsciences.com/GA11748")
          }
        >
          Shop Here
        </button>
        <div className="pro_container">
          <div className="pro__image">
            <img src="/images/pro.png" alt="" />
          </div>
          <p className="pro__tip">
            Pro Tip: Click above right for your country. Click{" "}
            <small
              onClick={() =>
                openInNewTab("http://pageshop.myqsciences.com/GA11748")
              }
              className="text-purpleLight shop__button"
            >
              here
            </small>{" "}
            to go to shop
          </p>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
