import React, { Component } from "react";

export default class Syllabus extends Component {
  state = {
    isLoading: false,
    syllabus: []
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/syllabus")
      .then(response => response.json())
      .then(syllabus => {
        console.log(syllabus.syllabus[0]);

        this.setState({
          syllabus: syllabus.syllabus,
          isLoading: false
        });
      });
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div id="syllabus">
          <div className="body1" style={{ fontFamily: "Rambla" }}>
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
                    Syllabus
                  </h2>

                  <div class="index align-left">
                    <section id="reference-banner">
                      <div class="content">
                        <section>
                          <div class="table-wrapper">
                            <table class="alt uniform fixed">
                              <tbody style={{ textAlign: "center" }}>
                                <tr>
                                  <td>CURRENT SEMESTER</td>
                                  <td>DOWNLOAD</td>
                                </tr>
                                <tr class="alt">
                                  <td colspan="2"></td>
                                </tr>
                                {this.state.syllabus.map((syllabus, index) => (
                                  <tr>
                                    <td>{syllabus.title}</td>
                                    <td>
                                      <a
                                        href={
                                          "https://csdept-api.herokuapp.com/" +
                                          syllabus.file
                                        }
                                        target="target_blank"
                                      >
                                        Click here to download
                                      </a>
                                    </td>
                                  </tr>
                                ))}
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
        </div>
      );
    } else return <div />;
  }
}
