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
      {/* <section className="spacer green">
        <div className="container">
          <div className="row">
            <div className="span6 alignright flyLeft">
              <blockquote className="large">
                There's huge space beetween creativity and imagination{" "}
                <cite>Mark Simmons, Nett Media</cite>
              </blockquote>
            </div>
            <div className="span6 aligncenter flyRight">
              <i className="icon-coffee icon-10x"></i>
            </div>
          </div>
        </div>
      </section> */}
      <About />

      <Works />
      <Words />
      <News />
      <Quote />

      <Images />
      <Subscribe />
      <a href="#" className="scrollup">
        <i className="icon-angle-up icon-square icon-bgdark icon-2x"></i>
      </a>
    </div>
  );
}
