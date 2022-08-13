import React from "react";
import "./styles.css";
function Subcomponent() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col w-full px-5 md:flex-row md:max-w-6xl md:mx-auto md:h-auto">
      <p className="text-secondary  call__to__action__text">
        人生や人間関係についてコーチングをしています。難しい状況や問題に直面している方々へ、自分の経験を生かしながらコーチングをしています。
      </p>
      <div className="my-3 md:pl-32">
        {" "}
        <button
          onClick={() => openInNewTab("https://forms.gle/uLemB4yJkEwBjBqA6")}
        >
          コーチングサービス
        </button>
      </div>
    </div>
  );
}

export default Subcomponent;
