import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/*My data*/}
          <div>
            <div className="foot">
              <div id="footer-wrapper">
                <footer id="footer" className="container">
                  <div className="row">
                    {/* <div className="col-3 col-6-medium col-12-small"> */}
                    <div className="span3">
                      <section>
                        <h2
                          className="h2"
                          style={{ fontSize: "1.5em", color: "white" }}
                        >
                          LNCT&S Cse
                        </h2>
                        <ul
                          className="divided"
                          style={{ fontFamily: "Rambla" }}
                        >
                          <li>
                            <Link to="/lncts">LNCT&S</Link>
                          </li>
                          <li>
                            <Link to="/programmes">Programmes </Link>
                          </li>
                          <li>
                            <Link to="/vision">Vision|Mission</Link>
                          </li>
                          <li>
                            <Link to="/management">Management</Link>
                          </li>
                          <li>
                            <Link to="/osd">Officer On Special Duty</Link>
                          </li>
                          <li>
                            <Link to="/dean">Dean</Link>
                          </li>{" "}
                          <li>
                            <Link to="/hod">Head of department</Link>
                          </li>
                          <li>
                            <Link to="/faculty">Faculties</Link>
                          </li>
                          <li>
                            <Link to="/alumni">Alumni</Link>
                          </li>
                          <li>
                            <Link to="/events">Events</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                        </ul>
                      </section>
                    </div>
                    {/* <div className="col-3 col-6-medium col-12-small"> */}
                    <div className="span3">
                      <section>
                        <h2 style={{ fontSize: "1.5em", color: "white" }}>
                          Quick Links
                        </h2>
                        <ul
                          className="divided"
                          style={{ fontFamily: "Rambla" }}
                        >
                          <li>
                            <Link to="/statistics">Placement Records</Link>
                          </li>
                          <li>
                            <Link to="/recruiters">Recruiters</Link>
                          </li>
                          <li>
                            <Link to="#news">Latest News</Link>
                          </li>
                          <li>
                            <Link to="/events">Latest Events</Link>
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 style={{ fontSize: "1.5em", color: "white" }}>
                          Student's Zone
                        </h2>
                        <ul
                          className="divided"
                          style={{ fontFamily: "Rambla" }}
                        >
                          <li>
                            <Link to="/syllabus">Syllabus</Link>
                          </li>
                          <li>
                            <Link to="/clubs">Student Clubs</Link>
                          </li>
                          <li>
                            <Link to="/calendar">Academic Calendar</Link>
                          </li>
                          <li>
                            <Link to="/achievements">Achievements</Link>
                          </li>
                        </ul>
                      </section>
                    </div>
                    {/* <div className="col-6 col-12-medium imp-medium"> */}
                    <div className="span4 offset1">
                      {" "}
                      <section>
                        <img src="/img/lnctlogo.png" alt="" />
                      </section>
                      <section>
                        <h2 style={{ fontSize: "1.5em", color: "white" }}>
                          Get in touch
                        </h2>
                        <div>
                          <div className="row" style={{ fontFamily: "Rambla" }}>
                            {/* <div className="col-6 col-12-small">
                              <dl className="contact">
                                <dt>Twitter</dt>
                                <dd>
                                  <Link to="#">@lncts-cse</Link>
                                </dd>
                                <dt>Facebook</dt>
                                <dd>
                                  <Link to="#">facebook.com/lnctcse</Link>
                                </dd>
                                <dt>WWW</dt>
                                <dd>
                                  <Link to="#">untitled.tld</Link>
                                </dd>{" "}
                                <dt>Email</dt>
                                <dd>
                                  <Link to="#">lnctscse@gmail.in</Link>
                                </dd>
                              </dl>
                            </div> */}
                            <div className="col-3 col-12-small"></div>
                            <div className="span3">
                              <dl
                                className="contact"
                                style={{ fontFamily: "Rambla" }}
                              >
                                <dt style={{ textAlign: "center" }}>Address</dt>
                                <dd style={{ textAlign: "center" }}>
                                  : Nr Hanuman Mandir, Raisen Rd, Kalchuri Nagar
                                  <br />
                                  Bhopal, Madhya Pradesh 462022
                                </dd>
                                <dt>Phone</dt>
                                <dd>(+91) 074407 77111</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-12">
                      <div id="copyright">
                        <ul className="menu">
                          <li>&copy; Untitled. All rights reserved</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          {/* <div className="span6 offset3">
            <ul className="social-networks">
              <li>
                <Link to="#">
                  <i className="icon-circled icon-bgdark icon-instagram icon-2x"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon-circled icon-bgdark icon-twitter icon-2x"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon-circled icon-bgdark icon-dribbble icon-2x"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon-circled icon-bgdark icon-pinterest icon-2x"></i>
                </Link>
              </li>
            </ul>
            <p className="copyright">
              &copy; Maxim Theme. All rights reserved.
              <div className="credits"> */}
          {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https:bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https:bootstrapmade.com/buy/?theme=Maxim
              --> */}
          {/* Designed by{" "}
                <Link to="https:bootstrapmade.com/">BootstrapMade</Link>
              </div>
            </p>
          </div> */}
        </div>
      </div>
      {/* <!-- ./container --> */}
    </footer>
  );
}
