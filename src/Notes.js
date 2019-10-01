import React from "react";
import "./mentor.css";
export default function Mentor() {
  return (
    <div className="body1" id="notes" style={{ fontFamily: "Rambla" }}>
      <div id="wrapper" class="divided">
        <section class="wrapper style1 align-center" id="reference">
          <div className="inner">
            <h2
              style={{
                textAlign: "center",
                textDecoration: "overline",
                fontFamily: "Rambla"
              }}
            >
              RGPV Notes
            </h2>

            <div class="index align-left">
              <section id="reference-banner">
                <div class="content">
                  <section>
                    <div class="table-wrapper">
                      <table class="alt uniform fixed">
                        <tbody style={{ textAlign: "center" }}>
                          <tr>
                            <td>CURRENT YEAR OF STUDY</td>
                          </tr>
                          <tr class="alt">
                            <td colspan="1"></td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="https://be.rgpvnotes.in/p/first-year.html"
                                target="target_blank"
                              >
                                I YEAR
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="https://btech.rgpvnotes.in/p/computer-science-2nd-year.html"
                                target="target_blank"
                              >
                                II YEAR
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="https://btech.rgpvnotes.in/p/computer-science-3rd-year.html"
                                target="target_blank"
                              >
                                III YEAR
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="https://btech.rgpvnotes.in/p/computer-science-4th-year.html"
                                target="target_blank"
                              >
                                IV YEAR
                              </a>
                            </td>
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
