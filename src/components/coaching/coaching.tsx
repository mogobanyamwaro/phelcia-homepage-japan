import React from "react";

function Coaching() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col w-full px-5 md:flex-row md:max-w-6xl md:mx-auto md:h-auto">
      <p className="text-secondary  call__to__action__text">
        Do not bug your family and friends to join your network marketing
        business. I shall teach you ways that you can find hot prospects.
      </p>
      <div className="my-3 md:pl-32">
        {" "}
        <button
          onClick={() => openInNewTab("https://forms.gle/uLemB4yJkEwBjBqA6")}
        >
          Training
        </button>
      </div>
    </div>
  );
}

export default Coaching;
