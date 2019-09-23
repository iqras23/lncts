import React from "react";
import "./dean.css";
export default function Osd() {
  return (
    <div>
      <div className="dean" style={{ fontFamily: "Rambla" }}>
        <section id="two" class="main style2">
          <div class="container">
            <div class="row  gtr-150">
              {/* <div class="col-6 col-12-medium imp-medium"> */}
              <div class="span5">
                <ul class="major-icons">
                  <span class="image fit">
                    {" "}
                    <br />
                    <br />
                    <br />
                    <img
                      src="/img/osd.jpg"
                      alt=""
                      style={{
                        boxShadow: "5px 10px 18px #888888"
                      }}
                    />
                  </span>
                </ul>
              </div>

              <div class="span5">
                <header class="major">
                  <h2 className="h22" style={{ fontSize: "1.5em" }}>
                    <strong>
                      Dr. Amitbodh Upadhyaya
                      <span style={{ fontSize: "0.9em" }}> (OSD)</span>
                    </strong>{" "}
                  </h2>
                </header>
                <p className="p1" style={{ lineHeight: "1.50em" }}>
                  <ul>
                    <li>
                      Phd. With Sub/topic: Organic Chemistry , Photolysis of
                      some organic compounds by UV Light.
                    </li>
                    <li>
                      Specialization: Organic Chemistry, Engg. Chemistry,
                      Environmental Chemistry, Analytical Chemistry.
                    </li>
                    <li>
                      No. of research paper published national/international:
                      More than 30.
                    </li>
                    <li> No. of books published: One.</li>
                    <li>Total work experience: 18 years.</li>{" "}
                    <li>
                      Achievements other than above: A. Felicitated by NPTEL as
                      "ACTIVE SPOC-" at Noida on 30-1-18 , for instrumental role
                      in local chapter . B. Successfully completed 12 week
                      online Certification from NPTEL on "Analytical Chemistry
                      ". C. Invited as a guest speaker by various universities &
                      colleges.
                    </li>
                    <li>Total work experience 23 Years</li>
                    <li>
                      Award/ Project A, " Green Idols Awards " from Media giant
                      Dainik Bhaskar for promoting Environmental Awareness &
                      massive Tree Plantation drive. B, Felicitated by Dainik
                      Bhaskar on the occasion of Teacher's Day for the
                      contribution in academic excellence & in social cause. C.
                      Felicitated by Kotilya Academy for excellence in teaching
                      . D. Felicitated by "RUN BHOPAL RUN" for remarkable
                      contribution. E, Honoured by MP Government for significant
                      role in "Narmada Yatra & River conservation drive"
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
