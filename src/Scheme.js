import React, { Component } from "react";

export default class Scheme extends Component {
  state = {
    isLoading: false,
    schemes: []
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/schemes")
      .then(response => response.json())
      .then(schemes => {
        console.log(schemes.schemes[0]);

        this.setState({
          schemes: schemes.schemes,
          isLoading: false
        });
      });
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div id="scheme">
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
                    Scheme
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
                                {this.state.schemes.map(scheme => (
                                  <tr>
                                    <td>{scheme.title}</td>
                                    <td>
                                      <a
                                        href={
                                          "https://csdept-api.herokuapp.com/" +
                                          scheme.file
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
