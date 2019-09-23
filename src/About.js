import React from "react";

export default function About() {
  return (
    <div>
      <section id="about" className="section">
        <div className="container">
          <h4 style={{ fontFamily: "Rambla" }}>About Our Department</h4>
          <div className="row">
            <div className="span5 offset1" style={{ fontFamily: "Rambla" }}>
              <div>
                <p className="span6" style={{ lineHeight: "1.5em" }}>
                  {" "}
                  <h2>
                    {" "}
                    <strong>Computer Science & Engineering</strong>
                  </h2>
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
        {/*other*/}

        {/* <div className="row">
          <div className="span2 offset1 flyIn">
            <div className="people">
              <img
                className="team-thumb img-circle"
                src="img/team/img-1.jpg"
                alt=""
              />
              <h3>John Doe</h3>
              <p>Art director</p>
            </div>
          </div>
          <div className="span2 flyIn">
            <div className="people">
              <img
                className="team-thumb img-circle"
                src="img/team/img-2.jpg"
                alt=""
              />
              <h3>Mike Doe</h3>
              <p>Web developer</p>
            </div>
          </div>
          <div className="span2 flyIn">
            <div className="people">
              <img
                className="team-thumb img-circle"
                src="img/team/img-3.jpg"
                alt=""
              />
              <h3>Neil Doe</h3>
              <p>Web designer</p>
            </div>
          </div>
          <div className="span2 flyIn">
            <div className="people">
              <img
                className="team-thumb img-circle"
                src="img/team/img-4.jpg"
                alt=""
              />
              <h3>Mark Joe</h3>
              <p>UI designer</p>
            </div>
          </div>
          <div className="span2 flyIn">
            <div className="people">
              <img
                className="team-thumb img-circle"
                src="img/team/img-5.jpg"
                alt=""
              />
              <h3>Stephen B</h3>
              <p>Digital imaging</p>
            </div>
          </div>
        </div> */}
      </section>
    </div>

    //     {/* <!-- /.container --> */}
    //   </section>
    // </div>
  );
}
