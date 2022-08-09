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
          私たちは、皆さんが抱えもつあらゆる健康に関する状態を助けるために、入念な調査を実施し、テスト済みの健康商品を数多く取り揃えています。こちらの商品を選んでいただいた方が健康になるばかりではなく、実は、健康になろうと決意したその時から更に金銭的問題からも同時に解放されるのです。いかがでしょうか。興味を持たれた方は、私達と一緒にこのウエルネス商品の素晴らしさを広めましょう。
        </p>
      </div>
      <div className="my-3 md:my-0 md:pl-32">
        {" "}
        <button
          onClick={() =>
            openInNewTab("http://pageshop.myqsciences.com/GA11748")
          }
        >
          コミュニティーに参加する
        </button>
      </div>
    </div>
  );
}

export default WhatWeDo;
