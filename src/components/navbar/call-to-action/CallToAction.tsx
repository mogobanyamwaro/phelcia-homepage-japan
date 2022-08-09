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
        あなたは今の健康状態を改善し、もっと健康になりたいですか。または、それ以上に健康とウェルネスに興味があり、今後をそれに真剣に取り組みたいとお考えですか。それでしたら、ぜひ我々の商品をご覧ください。これは商品を購入するだけではなく、取り組みに関して、どのようにすれば良いかご説明します。
      </p>
      <div className="my-3 md:pl-32">
        {" "}
        <button
          onClick={() =>
            openInNewTab("http://pageshop.myqsciences.com/GA11748")
          }
        >
          商品を買う
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
