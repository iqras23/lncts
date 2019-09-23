import React from "react";
import "./about.css";
export default function management() {
  return (
    <div>
      <section id="blog" class="section" style={{ fontFamily: "Rambla" }}>
        <div class="container">
          <h4 style={{ textDecoration: "overline" }}>Our Leadership</h4>
          <br />
          <div className="row">
            <div class="span4 ">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/chariman.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <div class="accordion" id="myAccordion">
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h3 class="mb-0" style={{ textAlign: "center" }}>
                          <strong>CHAIRMAN</strong>
                        </h3>
                        <p style={{ textAlign: "center" }}>
                          {" "}
                          Education is what remains after one has forgotten what
                          one has learned in school”. At LNCT University/LNCT
                          Group of Colleges, the purpose of life is taught.
                          <br />
                          <br />
                          <strong>Shri Jai Narayan Chouksey</strong>
                          <br />
                          Chairman – LNCT Group
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="span4">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/vice.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <div class="accordion" id="myAccordion">
                    <div class="card">
                      <div class="card-header" id="headingNine">
                        <h3 class="mb-0" style={{ textAlign: "center" }}>
                          <strong>VICE CHAIRPERSON</strong>
                        </h3>
                        <p style={{ textAlign: "center" }}>
                          I welcome you to this campus of higher learning which
                          is being the prime unit of LNCT Group. In my
                          considered your decision to choose LNCT is right and
                          wise.
                          <br />
                          <br />
                          <strong>Poonam Chouksey</strong>
                          <br />
                          Vice Chairperson
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="span4">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/secretary.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <div class="accordion" id="myAccordion">
                    <div class="card">
                      <div class="card-header" id="headingNine">
                        <h3 class="mb-0" style={{ textAlign: "center" }}>
                          <strong>SECRETARY</strong>
                        </h3>
                        <p style={{ textAlign: "center" }}>
                          I believe learning is the only tool for success of any
                          individual. At LNCT, we are committed for betterment
                          of society through development of students in every
                          stage.
                          <br />
                          <br />
                          <strong> Dr. Anupam Chouksey</strong>
                          <br />
                          Secretary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
