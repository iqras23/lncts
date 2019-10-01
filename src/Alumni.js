import React from "react";

export default function Alumni() {
  return (
    <div>
      <div id="alumni"></div>
      <section
        id="blog"
        class="section"
        style={{
          boxShadow: "5px 10px 18px #888888"
        }}
      >
        <div class="container" style={{ fontFamily: "Rambla" }}>
          <h4
            style={{
              fontFamily: "Rambla",
              fontSize: "45px",
              textDecoration: "overline",
              webkitTextStroke: "0.3px black"
            }}
          >
            OUR ALUMNI
          </h4>

          <div
            class="row"
            style={{
              textAlign: "center",
              fontFamily: "Rambla"
            }}
          >
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture1.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Abhinav Bakshi </strong>
                  </h5>
                  18 LACS
                  <br />
                  ORACLE
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture2.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Prayank Jain</strong>
                  </h5>
                  18 LACS
                  <br />
                  VM ware
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture3.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Pulkit Waliya</strong>
                  </h5>
                  18 LACS
                  <br />
                  VM ware
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture4.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Ina Sebstian</strong>
                  </h5>
                  15 LACS
                  <br />
                  Flipkart
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ textAlign: "center", fontFamily: "Rambla" }}
          >
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture5.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Abhiruchi Sharma</strong>
                  </h5>
                  6 LACS
                  <br />
                  Tech Systems
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture6.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5 style={{ textAlign: "center" }}>
                    <strong>Richa Agarwal</strong>
                  </h5>
                  3.8 Lacs
                  <br />
                  Persistent
                </div>
              </div>
            </div>

            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture7.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Ayush Jain</strong>
                  </h5>
                  3.8 LACS
                  <br />
                  Reliance Jio
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="home-post">
                <div class="post-image">
                  <img class="max-img" src="img/Picture9.jpg" alt="" />
                </div>

                <div class="entry-content">
                  <h5>
                    <strong>Vineet Jaruhar</strong>
                  </h5>
                  Owner & Founder
                  <br />
                  AVRN Labs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
