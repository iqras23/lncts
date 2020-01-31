import React from "react";
import "./gallery.css";
export default function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <section className="section">
        <h2 style={{ textAlign: "center", textDecoration: "overline" }}>
          <strong>Image Gallery</strong>
        </h2>
        <br />
        <div className="grid">
          <div className="item"></div>
          <div className="item item--large">
            <img src="/img/gallery/1.jpg" alt="" />
          </div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item item--full"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item"></div>
          <div className="item item--medium"></div>
          <div className="item item--large"></div>
          <div className="item"></div>
          <div className="item item--medium"></div>
          <div className="item item--medium"> </div>
          <div className="item item--large"></div>
          <div className="item"></div>
        </div>
      </section>
    </div>
  );
}
