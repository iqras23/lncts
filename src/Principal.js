import React from "react";
import "./dean.css";
export default function Principal() {
  return (
    <div>
      <div className="dean" style={{ fontFamily: "Rambla" }}>
        <section id="two" class="main style2">
          <div class="container">
            <div class="row  gtr-150">
              <div class="span4">
                <ul class="major-icons">
                  <span class="image fit">
                    {" "}
                    <img
                      src="/img/111.jpeg"
                      alt=""
                      style={{
                        boxShadow: "5px 10px 18px #888888"
                      }}
                    />
                  </span>
                </ul>
              </div>
              {/* <div class="col-6 col-12-medium"> */}
              <div class="span6">
                <header class="major">
                  <h2 className="h22" style={{ fontSize: "1.7em" }}>
                    <strong>
                      <br />
                      Dr. A. K. Sachan
                      <span style={{ fontSize: "0.9em" }}>
                        {" "}
                        <br />
                        (Principal)
                      </span>
                      <br />
                    </strong>{" "}
                  </h2>
                </header>
                <p className="p1" style={{ lineHeight: "1.85em" }}>
                  <ul>
                    <br />

                    <li>
                      Phd. With Sub/topic: PhD ( Computer Science & Engg):
                      Cellular Mobile Communication
                    </li>
                    <li>
                      {" "}
                      Specialization: Computer Science & Engg /Cellular Mobile
                      Communication
                    </li>
                    <li>
                      No. of research paper published national /international:
                      <br />
                      Some research papers published. International Journal/
                      Conference-30 National Journal/ Conference: 13
                    </li>
                    <li>
                      No. of books published: Basic Electrical Engg. By Satya
                      Prakashan, New Delhi
                    </li>
                    <li> Total work experience: 28 years</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
