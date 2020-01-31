import React from "react";

export default function Statistics() {
  return (
    <div className="body1" id="stats" style={{ fontFamily: "Rambla" }}>
      <div id="wrapper" className="divided">
        <section className="wrapper style1 align-center" id="reference">
          <div className="inner">
            <h2
              style={{
                textAlign: "center",
                textDecoration: "overline",
                fontFamily: "Rambla"
              }}
            >
              Placement Record Of LNCT&S CSE
            </h2>

            <div className="index align-left">
              <section id="reference-banner">
                {/* <header>
                  <h3>Mentor Information Of All ClassNamees</h3>
                </header> */}
                <div className="content">
                  <section>
                    <div className="table-wrapper">
                      <table className="alt uniform fixed">
                        <tbody style={{ textAlign: "center" }}>
                          <tr>
                            <td>
                              <code>Year</code>
                            </td>
                            <td>
                              <code>Total Students</code>
                            </td>
                            <td>
                              <code>Placed </code>
                            </td>
                          </tr>
                          <tr className="alt">
                            <td colspan="3"></td>
                          </tr>
                          <tr>
                            <td>
                              <code>2016</code>
                            </td>
                            <td>158</td>
                            <td>78</td>
                          </tr>
                          <tr>
                            <td>
                              <code>2017</code>
                            </td>
                            <td>156</td>
                            <td>81</td>
                          </tr>
                          <tr>
                            <td>
                              <code>2018</code>
                            </td>
                            <td>152</td>
                            <td>120</td>
                          </tr>
                          <tr className="alt">
                            <td colspan="3"></td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <br />
                      <section
                        style={{
                          textAlign: "center",
                          fontFamily: "Rambla",
                          textDecoration: "overline"
                        }}
                      >
                        <h2>Gallery</h2>
                        <br />
                        <div className="row">
                          <div className="span3">
                            <a href="/img/1.jpeg" target="target_blank">
                              <img
                                src="/img/1.jpeg"
                                alt=""
                                style={{
                                  boxShadow: " 1px 2px 4px #888888"
                                }}
                              />
                            </a>
                          </div>
                          <div className="span3">
                            <a href="/img/2.jpeg" target="target_blank">
                              <img
                                src="/img/2.jpeg"
                                alt=""
                                style={{
                                  boxShadow: " 1px 2px 4px #888888"
                                }}
                              />
                            </a>
                          </div>
                          <div className="span3">
                            <a href="/img/3.jpeg" target="target_blank">
                              <img
                                src="/img/3.jpeg"
                                alt=""
                                style={{
                                  boxShadow: " 1px 2px 4px #888888"
                                }}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="span3 offset1">
                            <a href="/img/4.jpeg" target="target_blank">
                              <img
                                src="/img/4.jpeg"
                                alt=""
                                style={{
                                  boxShadow: " 1px 2px 4px #888888"
                                }}
                              />
                            </a>
                          </div>
                          <div className="span3 offset1">
                            <a href="/img/5.jpeg" target="target_blank">
                              <img
                                src="/img/5.jpeg"
                                alt=""
                                style={{
                                  boxShadow: " 1px 2px 4px #888888"
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
