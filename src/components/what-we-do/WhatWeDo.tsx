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
        <h1 className=" what__we__do ">私たちの活動</h1>
        <p className="text-secondary what__we_do_text font-Poppins">
          金銭的問題から解放される。いかがでしょうか。興味を持たれた方は、私達と一緒にこのウエルネス商品の素晴らしさを広めましょう。
        </p>
      </div>
      <div className="my-3 md:my-0 md:pl-32">
        {" "}
        <button
          onClick={() =>
            openInNewTab("http://pageshop.myqsciences.com/GA11748")
          }
        >
          活動に参加する
        </button>
      </div>
    </div>
  );
}

export default WhatWeDo;
