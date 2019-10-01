import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="home">
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
              <h1
                className="brand"
                style={{
                  fontFamily: "Acme !important"
                }}
              >
                <a href="/">LNCT&S CSE</a>
              </h1>
              {/* <!-- navigation --> */}
              <nav className="pull-right nav-collapse collapse">
                <ul id="menu-main" className="nav">
                  <li>
                    <a href="/#home">Home</a>
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
                        <a href="/aboutlncts#aboutlncts">LNCT&S</a>
                      </li>
                      <li>
                        <a href="/vision|mission#vision|mission">
                          Vision|Mission
                        </a>
                      </li>
                      <li>
                        <a href="/leadership#leadership">Management</a>
                      </li>{" "}
                      <li>
                        <a href="/osd#osd">OSD</a>
                      </li>{" "}
                      <li>
                        <a href="/principal#principal"> Principal</a>
                      </li>{" "}
                      <li>
                        <a href="/dean#dean">Dean</a>
                      </li>{" "}
                      <li>
                        <a href="/hod#hod">Hod</a>
                      </li>{" "}
                    </ul>
                  </li>{" "}
                  <li>
                    <a href="/admission#admission">Admission</a>
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
                        <a href="/programmes#program">Programmes</a>
                      </li>
                      <li>
                        <a href="/calendar#calendar">Academic Calendar</a>
                      </li>
                      <li>
                        <a href="/scheme#scheme">Scheme</a>
                      </li>
                      <li>
                        <a href="/syllabus#syllabus">Syllabus</a>
                      </li>
                      <li>
                        <a href="/labs#labs">Labs</a>
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
                        <a href="/faculty#faculty">Faculties</a>
                      </li>
                      <li>
                        <a href="/alumni#alumni">Alumni</a>
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
                        <a href="/clubs#clubs">Student Clubs</a>
                      </li>

                      <li>
                        <a href="/mentorinfo#info">Mentor Info</a>
                      </li>
                      <li>
                        <a href="/notes#notes">Notes</a>
                      </li>
                      <li>
                        <a href="/previousyearquestionpapers#rgpv">
                          Rgpv Question Papers
                        </a>
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
                    <a href="/events#events">Events </a>
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
                        <a href="/recruiters#recruiters">Our Recruiters</a>
                      </li>
                      <li>
                        <a href="/placementstatistics#stats">
                          Placement Statistics
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/gallery#gallery">Gallery</a>
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
// import React from "react";
// import { Link } from "react-router-dom";
// import "./dropdown.css";
// export default function Navbar() {
//   return (
//     <div>
//       {/* <!-- navbar --> */}
//       <div className="navbar-wrapper">
//         <div className="navbar navbar-inverse navbar-fixed-top">
//           <div className="navbar-inner">
//             <div className="container">
//               {/* <!-- Responsive navbar --> */}
//               <a
//                 href="#"
//                 className="btn btn-navbar"
//                 data-toggle="collapse"
//                 data-target=".nav-collapse"
//               >
//                 <span className="icon-bar" />
//                 <span className="icon-bar" />
//                 <span className="icon-bar" />
//               </a>
//               <h1 className="brand" style={{ fontFamily: "Acme !important" }}>
//                 <a href="/#home">LNCT&S CSE</a>
//               </h1>
//               {/* <!-- navigation --> */}
//               <nav className="pull-right nav-collapse collapse">
//                 <ul id="menu-main" className="nav">
//                   <li>
//                     <a href="/#home">Home</a>
//                   </li>
//                   <li className="dropdown">
//                     <Link
//                       to="#"
//                       data-toggle="dropdown"
//                       className="dropdown-toggle"
//                       class="dropbtn"
//                     >
//                       About Us <b className="caret" />
//                     </Link>
//                     <div class="dropdown-content">
//                       <Link to="/aboutlncts#about">LNCT&S</Link>
//                       <Link to="/vision|mission#vm">Vision|Mission</Link>
//                       <Link to="/leadership#leadership">Management</Link>
//                       <Link to="/osd#osd">OSD</Link>
//                       <Link to="/principal#principal"> Principal</Link>
//                       <Link to="/dean#dean">Dean</Link>
//                       <Link to="/hod#hod">Hod</Link>
//                     </div>{" "}
//                   </li>

//                   <li>
//                     <Link to="/admission#admission">Admission</Link>
//                   </li>
//                   <li className="dropdown">
//                     <Link
//                       to="#"
//                       data-toggle="dropdown"
//                       className="dropdown-toggle"
//                       class="dropbtn"
//                     >
//                       Academics <b className="caret" />
//                     </Link>
//                     <div class="dropdown-content">
//                       <Link to="/programmes#programmes">Programmes</Link>
//                       <Link to="/calendar#calendar">Academic Calendar</Link>
//                       <Link to="/scheme#scemes">Scheme</Link>
//                       <Link to="/syllabus#syllabus">Syllabus</Link>
//                       <Link to="/labs#labs">Labs</Link>
//                     </div>{" "}
//                   </li>
//                   <li className="dropdown">
//                     <Link
//                       to="#"
//                       data-toggle="dropdown"
//                       className="dropdown-toggle"
//                       class="dropbtn"
//                     >
//                       People <b className="caret" />
//                     </Link>
//                     <div class="dropdown-content">
//                       <Link to="/faculty#faculty">Faculties</Link>

//                       <Link to="/alumni#alumni">Alumni</Link>
//                     </div>{" "}
//                   </li>
//                   <li className="dropdown">
//                     <Link
//                       to="#"
//                       data-toggle="dropdown"
//                       className="dropdown-toggle"
//                       class="dropbtn"
//                     >
//                       Students <b className="caret" />
//                     </Link>
//                     <div class="dropdown-content">
//                       <Link to="/clubs#clubs">Student Clubs</Link>

//                       <Link to="/achievements#achievements">Achievements</Link>

//                       <Link to="/mentorinfo#info">Mentor Info</Link>

//                       <Link to="/notes">Notes</Link>

//                       <Link to="/previousyearquestionpapers">
//                         Question Papers
//                       </Link>

//                       <a
//                         href="https://www.rgpv.ac.in/Login/StudentLogin.aspx"
//                         target="target_blank"
//                       >
//                         Rgpv Login
//                       </a>

//                       <a
//                         href="http://portal.lnct.ac.in/accsoft2/login.aspx"
//                         target="target_blank"
//                       >
//                         Accsoft Login
//                       </a>
//                     </div>
//                   </li>

//                   <li>
//                     <Link to="/events#events">Events </Link>
//                   </li>
//                   <li className="dropdown">
//                     <Link
//                       to="#"
//                       data-toggle="dropdown"
//                       className="dropdown-toggle"
//                       class="dropbtn"
//                     >
//                       Placements <b className="caret" />
//                     </Link>
//                     <div class="dropdown-content">
//                       <Link to="/recruiters#recruiters">Our Recruiters</Link>

//                       <Link to="/placementstatistics#statistics">
//                         Placement Statistics
//                       </Link>
//                     </div>{" "}
//                   </li>
//                   <li>
//                     <Link to="/gallery#gallery">Gallery</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
