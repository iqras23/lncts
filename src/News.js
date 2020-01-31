import React, { Component } from "react";
import "./news.css";
export default class News extends Component {
  state = {
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
  render() {
    var res = [];
    var res1;
    var res2;
    if (!this.state.isLoading) {
      return (
        <div>
          <div className="news" id="news">
            <div id="page-wrapper">
              <section id="footer1">
                <div className="container">
                  <div className="row">
                    <section>
                      {" "}
                      <br />
                      <br />
                      <header>
                        <h2>Latest News And Updates</h2>
                      </header>{" "}
                      {this.state.news.map((news, index) => (
                        <div key={news._id}>
                          {
                            (((res = news.formattedDate.split(" ")),
                            (res1 = res[0]),
                            (res2 = res[1])),
                            console.log(res1))
                          }
                          <br />
                          <div className="span12 offset1">
                            <ul className="dates">
                              <li>
                                <span className="date">
                                  {res1}
                                  <strong>{res2}</strong>
                                </span>{" "}
                                <h2 style={{ paddingLeft: "20px" }}>
                                  <a href="#">{news.title}</a>
                                </h2>
                                <br />
                                <p style={{ paddingLeft: "20px" }}>
                                  {news.body}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </section>
                    <br />
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
