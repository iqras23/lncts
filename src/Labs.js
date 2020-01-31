import React from "react";
import "./labs.css";
export default function App() {
  return (
    <div className="labs" id="labs" style={{ backgroundColor: "black" }}>
      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image2">
            <img src="/img/projectlab.jpg" alt="" />
          </div>
          <div className="content">
            <h2 className="h2">Project Lab</h2>
          </div>
        </section>
        <section className="spotlight">
          <div className="image2">
            <img src="/img/softwarelab.jpg" alt="" />
          </div>
          <div className="content">
            <h2 className="h2">Software Lab</h2>
          </div>
        </section>
        <section className="spotlight">
          <div className="image2">
            <img src="/img/networklab.jpg" alt="" />
          </div>
          <div className="content">
            <h2 className="h2">Network Lab</h2>
          </div>
        </section>
        <section className="spotlight">
          <div className="image2">
            <img src="/img/comp.jpg" alt="" />
          </div>
          <div className="content">
            <h2 className="h2">Computer Center</h2>
          </div>
        </section>
      </section>
    </div>
  );
}
