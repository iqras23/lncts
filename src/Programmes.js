import React from "react";
import "./programmes.css";
export default function Programmes() {
  return (
    <div className="program">
      <div className="body2" style={{ paddingLeft: "23px" }}>
        <div class="row">
          <section>
            <div class="container">
              <section class="  box feature2 section">
                <h2 className="h" style={{ textDecoration: " overline" }}>
                  {" "}
                  <div class="aligncenter">Programmes Offered</div>
                </h2>
                <br />

                <div class="row">
                  <div class="span6">
                    <div class="aligncenter">
                      <section
                        style={{
                          boxShadow: " 3px 5px 10px #888888"
                        }}
                      >
                        {" "}
                        <div className="align center">
                          <header class="major header">
                            <br />

                            <h2 className="h">B.Tech</h2>
                          </header>
                          <p
                            style={{
                              fontFamily: "Rambla"
                            }}
                          >
                            Etablished in 2006.
                            <br />
                            No. of Student intake - 180.
                            <br />
                            4 well equipped labs with 1:1 allotments.
                            <br />
                            Faculty mentors per 30 students.
                            <br />
                            More than 60 research papers and patents.
                            <br />
                            90% student placement every year
                          </p>
                          <br />
                          <br />
                        </div>
                      </section>
                    </div>
                  </div>
                  <div class="span6">
                    <section
                      style={{
                        boxShadow: "3px 5px 10px #888888"
                      }}
                    >
                      <header class="major header">
                        <br />
                        <h2 className="h">M.Tech</h2>
                      </header>
                      <p
                        style={{
                          fontFamily: "Rambla"
                        }}
                      >
                        Established in 2012.
                        <br />
                        No. of Student intake - 30.
                        <br />
                        No. of paper published 100+.
                        <br />
                        90% student placement every year.
                        <br />
                        The research projects done – 50+.
                        <br />
                        Area of research – Machine learning, IOT.
                      </p>
                      <br />
                      <br />
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
