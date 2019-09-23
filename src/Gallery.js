import React from "react";
import "./gallery.css";
export default function Gallery() {
  return (
    <div className="gallery">
      <section class="section">
        <h2 style={{ textAlign: "center", textDecoration: "overline" }}>
          <strong>Image Gallery</strong>
        </h2>
        <br />
        <div class="grid">
          <div class="item"></div>
          <div class="item item--large">
            <img src="/img/gallery/1.jpg" alt="" />
          </div>
          <div class="item item--medium"></div>
          <div class="item item--large"></div>
          <div class="item item--full"></div>
          <div class="item item--medium"></div>
          <div class="item item--large"></div>
          <div class="item"></div>
          <div class="item item--medium"></div>
          <div class="item item--large"></div>
          <div class="item"></div>
          <div class="item item--medium"></div>
          <div class="item item--medium"> </div>
          <div class="item item--large"></div>
          <div class="item"></div>
        </div>
      </section>
    </div>
  );
}
