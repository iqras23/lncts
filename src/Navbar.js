import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      {/* <!-- navbar --> */}
      <div className="navbar-wrapper">
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              {/* <!-- Responsive navbar --> */}
              <a
                href="#"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </a>
              <h1 className="brand" style={{ fontFamily: "Acme !important" }}>
                <a href="/">LNCT&S CSE</a>
              </h1>
              {/* <!-- navigation --> */}
              <nav className="pull-right nav-collapse collapse">
                <ul id="menu-main" className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                    >
                      About Us
                      <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/aboutlncts">LNCT&S</Link>
                      </li>
                      <li>
                        <Link to="/vision|mission">Vision|Mission</Link>
                      </li>
                      <li>
                        <Link to="/leadership">Management</Link>
                      </li>{" "}
                      <li>
                        <Link to="/osd">OSD</Link>
                      </li>{" "}
                      <li>
                        <Link to="/principal"> Principal</Link>
                      </li>{" "}
                      <li>
                        <Link to="/dean">Dean</Link>
                      </li>{" "}
                      <li>
                        <Link to="/hod">Hod</Link>
                      </li>{" "}
                    </ul>
                  </li>{" "}
                  <li>
                    <Link to="/admission">Admission</Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                    >
                      Academics
                      <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/programmes">Programmes</Link>
                      </li>
                      <li>
                        <Link to="/calendar">Academic Calendar</Link>
                      </li>
                      <li>
                        <Link to="/scheme">Scheme</Link>
                      </li>
                      <li>
                        <Link to="/syllabus">Syllabus</Link>
                      </li>
                      <li>
                        <Link to="/labs">Labs</Link>
                      </li>{" "}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                    >
                      People <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/faculty">Faculties</Link>
                      </li>
                      <li>
                        <Link to="/alumni">Alumni</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                    >
                      Students <b className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/clubs">Student Clubs</Link>
                      </li>
                      <li>
                        <Link to="/achievements">Achievements</Link>
                      </li>
                      <li>
                        <Link to="/mentorinfo">Mentor Info</Link>
                      </li>

                      <li>
                        <a
                          href="https://www.rgpv.ac.in/Login/StudentLogin.aspx"
                          target="target_blank"
                        >
                          Rgpv Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://portal.lnct.ac.in/accsoft2/login.aspx"
                          target="target_blank"
                        >
                          Accsoft Login
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/events">Events </Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                    >
                      Placements <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/recruiters">Our Recruiters</Link>
                      </li>
                      <li>
                        <Link to="/placementstatistics">
                          Placement Statistics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
