import React from "react";

function Coaching() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col w-full px-5 md:flex-row md:max-w-6xl md:mx-auto md:h-auto">
      <p className="text-secondary  call__to__action__text">
        I coach people for the difficult situations that they find themselves in
        life. Through this coaching, I help them to not feel as though the
        darkness, fear, anger, hopelessness is consuming them. For relationship
        coaching service, do not ignore the small bits niggling at you. Talk to
        me.
      </p>
      <div className="my-3 md:pl-32">
        {" "}
        <button
          onClick={() => openInNewTab("https://forms.gle/uLemB4yJkEwBjBqA6")}
        >
          Reach Out For Coaching
        </button>
      </div>
    </div>
  );
}

export default Coaching;
