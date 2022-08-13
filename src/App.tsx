import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import CallToAction from "./components/navbar/call-to-action/CallToAction";
import WhatWeDo from "./components/what-we-do/WhatWeDo";
import About from "./components/about-me/About";
import Footer from "./components/footer/Footer";
import Subcomponent from "./components/sub-component/Subcomponent";

function App() {
  return (
    <div className="App flex flex-col   justify-evenly">
      <Navbar />
      <CallToAction />
      <WhatWeDo />
      {/* <About /> */}
      <Subcomponent />
      <Footer />
    </div>
  );
}

export default App;
