import React from "react";

export default function Faculty() {
  return (
    <div id="faculty">
      <section id="blog" className="section" style={{ fontFamily: "Rambla" }}>
        <div className="container">
          <h4
            style={{
              fontFamily: "Rambla",
              fontSize: "40px",
              textDecoration: "overline"
            }}
          >
            Our Faculties
          </h4>
          <br />

          <div className="row">
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseNine"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/ash.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingNine">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Dr. Ashish Khare</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseNine"
                        className="collapse"
                        aria-labelledby="headingNine"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "bullet" }}>
                            <li>Qualification – PHD – Doctorate.</li>
                            <li>Experience – 15 years.</li>
                            <li>No of Publications- 25.</li>
                            <li>
                              Specialization - wireless networks ,Mobile Ad hoc
                              networks and image processing.
                            </li>
                            <li>Membership Details - CSI & ISTE.</li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*BHAWNA MAM*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseOne"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/bhaw.jpeg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Bhawna Pillai</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul style={{ listStyle: "bullet" }}>
                              <li>
                                {" "}
                                Asst. Professor department of computer science.
                              </li>
                              <li>11 years of experience.</li>
                              <li>Specialization in wireless network MANET.</li>
                              <li>
                                6 international publications and 3 in journals.
                              </li>{" "}
                              <li>
                                Topic of interest: Algorithms, Algebraic
                                Structures.
                              </li>
                              <li> Best faculty Award in 2015,2018.</li>
                            </ul>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*AYUSH SIR*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseTwo"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/ay.jpeg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Ayush Agrawal</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul>
                              <li>
                                Asst. Professor department of computer science.
                              </li>
                              <li>Experience – 1 years.</li>
                              <li>Specialization – IOT, WSN.</li>
                              <li>
                                Topic of interest – Networking, NS2, LATEX.
                              </li>
                              <li>1 SCI Publication, 1Scopus.</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Ashish sir*/}

            {/*Vinod sir*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseFour"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/vin.jpeg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Vinod Patel</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul style={{ listStyle: "bullet" }}>
                              <li>
                                {" "}
                                Asst. Professor department of computer science.
                              </li>
                              <li>11 years of experience.</li>
                              <li>
                                Specialization in wireless network information
                                security.
                              </li>
                              <li>
                                11 international publications and 3 in journals.
                              </li>
                              <li>
                                Topic of interest: Data Mining and Warehousing.
                              </li>

                              <li>
                                No. of Publications- 3 national/international.
                              </li>
                            </ul>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Second row*/}
          <div className="row">
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseFive"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/dee.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Deepak Tomar</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul style={{ listStyle: "bullet" }}>
                              <li>
                                Asst. Professor department of computer science.
                              </li>
                              <li>Experience – 15 years.</li>
                              <li>
                                Specialization - Automata theory and Compiler
                                design.
                              </li>
                              <li>
                                Topic of interest - Automata theory and Compiler
                                design and Computer Network
                              </li>
                            </ul>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Vivek sir*/}

            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseSix"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/viv.jpeg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Vivek Kumar</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul style={{ listStyle: "bullet" }}>
                              <li>
                                {" "}
                                Asst. Professor department of computer science.
                              </li>
                              <li>6 years of experience.</li>
                              <li>
                                Specialization in wireless network information
                                security.
                              </li>
                              <li>
                                11 international publications and 3 in journals.
                              </li>
                              <li>
                                Topic of interest: Cloud computing,computer
                                network.
                              </li>
                              <li>Best faculty Award in 2019.</li>
                            </ul>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Nikesh Sir*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseSeven"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/nik.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingSeven">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Nikesh Tiwari</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <p>
                            <ul style={{ listStyle: "bullet" }}>
                              <li>
                                Asst. Professor department of computer science.
                              </li>
                              <li>Experience – 11 years.</li>
                              <li>Specialization –Image processing.</li>
                              <li>
                                Topic of interest Image processing ,C, C++,JAVA.
                              </li>
                              <li>
                                Best faculty award in Srijan2018,best faculty
                                award by Kautilya Shiksha Samiti in 2016.
                              </li>
                            </ul>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Surendra sir*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseEight"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/sure.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingEight">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Surendra Chadokar</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        aria-labelledby="headingEight"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "bullet" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>13 years of experience.</li>
                            <li>16 international publications.</li>
                            <li>
                              Topic of interest: Data Mining, Data Structure,
                              Distributed System, Cloud computing, web
                              technology, computer network.
                            </li>
                            <li>
                              Best faculty award for data structures in Srijan
                              2k18.
                            </li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Third row*/}
          <div className="row">
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseEleven"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/man.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingEleven">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Manoj Kumar</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseEleven"
                        className="collapse"
                        aria-labelledby="headingEleven"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "bullet" }}>
                            <li>
                              {" "}
                              Asst. Professor department of computer science.
                            </li>
                            <li>7 years of experience.</li>
                            <li>2 international publications.</li>
                            <li>
                              Topic of interest: Image processing, Network
                              security, C,C++,Python.
                            </li>
                            <li>Specialization: Image processing.</li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Gaurav sir*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseTen"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/gau.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingTen">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Gaurav Nayak</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseTen"
                        className="collapse"
                        aria-labelledby="headingTen"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "bullet" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>Experience – 7 years.</li>
                            <li>Specialization –Data Science, JAVA, Python.</li>
                            <li>
                              Topic of interest - JAVA, Python, TOC,compiler
                              design, JAVA, Web Engineering.
                            </li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Sushila mam*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseThree"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/sush.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Sushila Sonare</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingTwelve"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "disk" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>9 years of experience.</li>
                            <li>6 international publications.</li>
                            <li>
                              Topic of interest: Compiler and Machine Learning,
                              JAVA.
                            </li>
                            <li>
                              Specialization: Compiler, Deep learning Machine
                              Learning.
                            </li>
                            <li>
                              5 times GATE qualified, NPTEL certified in
                              discrete Structure and JAVA .
                            </li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Sushila mam*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseTwelve"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/sar.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingTwelve">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Safdar Khan</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseTwelve"
                        className="collapse"
                        aria-labelledby="headingTwelve"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "disk" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>11 years of experience.</li>
                            <li>6 international publications.</li>
                            <li>
                              Topic of interest: Data
                              Structure,SEPM,Python,ADA,C.
                            </li>
                            <li>Best faculty Award by TRUBA college Bhopal.</li>
                            <li>
                              No. of Publications- 3 national/international.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/*Ram sir*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseThirteen"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/ram.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingThirteen">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Ram Yadav</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseThirteen"
                        className="collapse"
                        aria-labelledby="headingThirteen"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "disk" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>7 years of experience.</li>
                            <li>2 international publications.</li>
                            <li>
                              Topic of interest: Image processing, Network
                              security, C,C++,Python.
                            </li>
                            <li>Specialization: Image processing.</li>
                          </ul>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Khushbu mam*/}
            <div
              className="span3"
              data-toggle="collapse"
              data-target="#collapseFourteen"
              style={{ cursor: "pointer" }}
            >
              <div className="home-post">
                <div className="post-image">
                  <img className="max-img" src="img/khush.jpg" alt="" />
                </div>

                <div className="entry-content">
                  <div className="accordion" id="myAccordion">
                    <div className="card">
                      <div className="card-header" id="headingFourteen">
                        <h5 style={{ textAlign: "center" }}>
                          <strong>Prof. Khushbu Rai</strong>
                        </h5>
                      </div>
                      <div
                        id="collapseFourteen"
                        className="collapse"
                        aria-labelledby="headingFourteen"
                        data-parent="#myAccordion"
                      >
                        <div className="card-body">
                          <ul style={{ listStyle: "disk" }}>
                            <li>
                              Asst. Professor department of computer science.
                            </li>
                            <li>Experience – 2 years.</li>
                            <li>Specialization – Image processing.</li>
                            <li>Topic of interest – Networking, database.</li>
                            <li>2 international publications.</li>
                            <li>
                              Participated in national level baseball and
                              softball championships.
                            </li>
                          </ul>{" "}
                        </div>
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
