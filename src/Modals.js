import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "Rambla",
  textAlign: "center"
};

export default class App extends Component {
  state = {
    open: true,
    isLoading: false,
    news: []
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/news")
      .then(response => response.json())
      .then(news => {
        console.log(news.news[0]);

        this.setState({
          news: news.news,
          isLoading: false
        });
      });
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    var res = [];
    var res1;
    var res2;
    if (!this.state.isLoading) {
      return (
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <div className="news">
              <div id="page-wrapper">
                <section id="footer1">
                  <div class="container">
                    <section>
                      {" "}
                      <br />
                      <br />
                      <div>
                        <header>
                          <h2>Latest News And Updates</h2>
                        </header>{" "}
                        {this.state.news.map((news, index) => (
                          <div>
                            {
                              (((res = news.formattedDate.split(" ")),
                              (res1 = res[0]),
                              (res2 = res[1])),
                              console.log(res1))
                            }
                            <br />
                            <div className="span8">
                              <ul className="dates">
                                <li>
                                  <h3 class="date">
                                    <h3 style={{ color: "black" }}>{res1}</h3>
                                    <strong>{res2}</strong>
                                  </h3>

                                  <h3>
                                    <br />{" "}
                                    <Link
                                      to="/#news"
                                      style={{
                                        outline: "none",
                                        paddingLeft: "20px"
                                      }}
                                    >
                                      {" "}
                                      {news.title}
                                    </Link>
                                    {/* <div class="modalconent">
                                      <marquee
                                        class="marquee"
                                        behavior="scroll"
                                        direction="left"
                                      >
                                     
                                      </marquee>
                                    </div>{" "} */}
                                  </h3>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                    <br />
                  </div>
                </section>
              </div>
            </div>
          </Modal>
        </div>
      );
    } else return <div />;
  }
}
