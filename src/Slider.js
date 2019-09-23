import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider(props) {
  return (
    <div
      style={{
        background: "black"
      }}
    >
      <Carousel
        showThumbs={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={false}
        showStatus={false}
        emulateTouch={true}
      >
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt="" />
            <p className="legend">{image.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
