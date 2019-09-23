import React from "react";
import "./labs.css";
export default function App() {
  return (
    <div className="labs" style={{ backgroundColor: "black" }}>
      {/* <!-- Two --> */}
      <section id="two" class="wrapper alt style2">
        <section class="spotlight">
          <div class="image2">
            <img src="/img/projectlab.jpg" alt="" />
          </div>
          <div class="content">
            <h2 className="h2">Project Lab</h2>
            {/* <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p> */}
          </div>
        </section>
        <section class="spotlight">
          <div class="image2">
            <img src="/img/softwarelab.jpg" alt="" />
          </div>
          <div class="content">
            <h2 className="h2">Software Lab</h2>
            {/* <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p> */}
          </div>
        </section>
        <section class="spotlight">
          <div class="image2">
            <img src="/img/networklab.jpg" alt="" />
          </div>
          <div class="content">
            <h2 className="h2">Network Lab</h2>
            {/* <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p> */}
          </div>
        </section>
        <section class="spotlight">
          <div class="image2">
            <img src="/img/comp.jpg" alt="" />
          </div>
          <div class="content">
            <h2 className="h2">Computer Center</h2>
            {/* <p>
                Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
              </p> */}
          </div>
        </section>
      </section>
    </div>
  );
}
