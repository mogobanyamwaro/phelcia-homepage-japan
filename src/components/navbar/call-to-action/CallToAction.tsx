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
            openInNewTab("https://shop.myqsciences.com/GA11748/Products?type=2")
          }
        >
          Shop Here
        </button>
      </div>
    </div>
  );
}

export default CallToAction;