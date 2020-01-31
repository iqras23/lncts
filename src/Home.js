import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Modals from "./Modals";
import Subscribe from "./Subscribe";

import Works from "./Works";
import Quote from "./Quote";
import Words from "./Words";
import Images from "./Images";
import News from "./News";
export default function Home() {
  return (
    <div>
      <Carousel />
      <Modals />
      <About />
      <Works />
      <News />
      <Words />
      <Images /> <Quote />
      <Subscribe />
      <a href="#" className="scrollup">
        <i className="icon-angle-up icon-square icon-bgdark icon-2x"></i>
      </a>
    </div>
  );
}
