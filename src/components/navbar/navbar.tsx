import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="flex py-3 md:py-0 justify-center px-5">
      <div className="flex items-center">
        {" "}
        <img className="h-14 w-14" src="/images/leaf.png" alt="" />{" "}
        <p className="navbar text-2xl ml-5">Health & Wellness</p>
      </div>
    </div>
  );
}

export default Navbar;
