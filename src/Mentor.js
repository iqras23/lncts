import React from "react";
import "./mentor.css";
export default function Mentor() {
  return (
    <div className="body1" id="info" style={{ fontFamily: "Rambla" }}>
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
              Mentor Information Of All Classes
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
                        <tbody>
                          <tr>
                            <td>
                              <code>Class</code>
                            </td>
                            <td>
                              <code>Mentor Name</code>
                            </td>
                          </tr>
                          <tr class="alt">
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>
                              <code>1 A</code>
                            </td>
                            <td>Mentor</td>
                          </tr>
                          <tr>
                            <td>
                              <code>1 B</code>
                            </td>
                            <td>Mentor</td>
                          </tr>
                          <tr>
                            <td>
                              <code>1 C</code>
                            </td>
                            <td>Mentor</td>
                          </tr>
                          <tr className="alt">
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>
                              <code>3 A</code>
                            </td>
                            <td>Prof. Manoj Kumar, Prof. Rajeev Kumar</td>
                          </tr>
                          <tr>
                            <td>
                              <code>3 B</code>
                            </td>
                            <td>Prof. Ayush Agarwal, Prof. Bhawna Pillai</td>
                          </tr>
                          <tr>
                            <td>
                              <code>3 C</code>
                            </td>
                            <td>Prof. Sushila Sonare, Prof. Gaurav Nayak</td>
                          </tr>
                          <tr className="alt">
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>
                              <code>5 A</code>
                            </td>
                            <td>Prof. Parag Sohoni, Prof. Vinod Patel</td>
                          </tr>
                          <tr>
                            <td>
                              <code>5 B</code>
                            </td>
                            <td>Prof. Surendra Chadokar, Prof. Deepak Tomar</td>
                          </tr>
                          <tr>
                            <td>
                              <code>5 C</code>
                            </td>
                            <td>Prof. Ram Yadav, Prof. Khushbu Rai</td>
                          </tr>
                          <tr className="alt">
                            <td colspan="2"></td>
                          </tr>
                          <tr>
                            <td>
                              <code>7 A</code>
                            </td>
                            <td>Prof. Vivek Kumar</td>
                          </tr>
                          <tr>
                            <td>
                              <code>7 B</code>
                            </td>
                            <td>Dr. Ashish Khare, Prof. Nikesh Tiwari</td>
                          </tr>
                          <tr>
                            <td>
                              <code>7 C</code>
                            </td>
                            <td>Mentor</td>
                          </tr>
                        </tbody>
                      </table>
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
