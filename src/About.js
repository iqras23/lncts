import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" className="section">
        <div className="container">
          <h4 style={{ fontFamily: "Rambla" }}>About Our Department</h4>
          <div className="row">
            <div className="span5 offset1" style={{ fontFamily: "Rambla" }}>
              <div className="span6" style={{ lineHeight: "1.5em" }}>
                {" "}
                <h2>
                  {" "}
                  <strong>Computer Science & Engineering</strong>
                </h2>{" "}
                <p>
                  The most important aspect of computer science is problem
                  solving, an essential skill for life. Students study the
                  design, development and analysis of software and hardware used
                  to solve problems in a variety of business, scientific and
                  social contexts. Because computers solve problems to serve
                  people, there is a significant human side to computer science
                  as well. The department at CSE ,LNCTS has a well equipped,
                  experienced and dedicated faculty to not only complete a set
                  curriculum but deploy skills and encourage research. A number
                  of labs like Project Lab, Software Systems and Computer Lab
                  ,Network Lab , well equipped with high quality of equipment.
                </p>
              </div>
            </div>

            <div className="span3 offset1">
              <div className="aligncenter">
                <img src="img/icons/laptop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
