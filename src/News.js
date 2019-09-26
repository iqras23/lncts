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
    var res1 = [];
    var res2 = [];
    if (!this.state.isLoading) {
      return (
        <div>
          <div className="news">
            <div id="page-wrapper">
              <section id="footer1">
                <div class="container">
                  <div class="row">
                    <section>
                      {" "}
                      <br />
                      <br />
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
                          <div className="span10 offset1">
                            <ul class="dates">
                              <li>
                                <span class="date">
                                  {res1}
                                  <strong>{res2}</strong>
                                </span>
                                <h3>
                                  <a href="#">{news.title}</a>
                                </h3>
                                <p>{news.body}</p>
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
