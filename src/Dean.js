import React from "react";
import "./dean.css";
export default function Dean() {
  return (
    <div>
      <div className="dean" style={{ fontFamily: "Rambla" }}>
        <section id="two" class="main style2">
          <div class="container">
            <div class="row  gtr-150">
              {/* <div class="col-6 col-12-medium imp-medium"> */}
              <div class="span6">
                <ul class="major-icons">
                  <span class="image fit">
                    {" "}
                    <img
                      src="/img/dean.jpg"
                      alt=""
                      style={{
                        boxShadow: "5px 10px 18px #888888"
                      }}
                    />
                  </span>
                </ul>
              </div>
              {/* <div class="col-6 col-12-medium"> */}
              <div class="span4">
                <header class="major">
                  <h2 className="h22" style={{ fontSize: "1.7em" }}>
                    <strong>
                      Dr. Amit Shrivastava
                      <span style={{ fontSize: "0.9em" }}>
                        {" "}
                        <br />
                        (Dean)
                      </span>
                      <br />
                    </strong>{" "}
                  </h2>
                </header>
                <p className="p1" style={{ lineHeight: "1.65em" }}>
                  <ul>
                    <br />
                    <li>
                      Phd. With Sub/topic: (Power System) “Improvement of Power
                      System Stability Using Artificial Intelligence Based Power
                      System Stabilizers”
                    </li>
                    <li>Specialization: Power System</li>
                    <li>
                      No. of research paper published national /international:
                      45 International / 01 National
                    </li>
                    <li>
                      No. of books published: Basic Electrical Engg. By Satya
                      Prakashan, New Delhi
                    </li>
                    <li>
                      {" "}
                      Achievements other than above: 2002 Awarded Silver Medal
                      for first class Second Position in M.Tech 1991 Awarded
                      Government of M.P., India and State Merit Scholarship for
                      merit position in State high school Board Examination.
                      2014 Best paper Award in First Conference of Sagar Society
                      of Interdisciplinary Research & Technology Sagar Group of
                      Institutions, Bhopal, India 2016 Faculty Appreciation
                      Awards By SRIJAN 2016 Faculty Appreciation Awards by Danik
                      Bhashkar on teacher day 2016
                    </li>
                    <li>Total work experience: 18 years.</li>{" "}
                    <li>
                      Award/ Project: Awarded Silver Medal for first class
                      Second Position in M.Tech
                    </li>
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
