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
    if (!this.state.isLoading) {
      return this.state.news.map(news => (
        <div>
          <div className="news">
            <div id="page-wrapper">
              {/* <!-- Footer --> */}
              <section id="footer1">
                <div class="container">
                  <div class="row">
                    <div class="col-8 col-12-medium">
                      <section>
                        {" "}
                        <br />
                        <br />
                        <header>
                          <h2>Latest News And Updates</h2>
                        </header>
                        <br />
                        <ul class="dates">
                          <li>
                            <span class="date">
                              {news.date.month}
                              <strong>{news.date.date}</strong>
                            </span>
                            <h3>
                              <a href="#">{news.title}</a>
                            </h3>
                            <p>{news.body}</p>
                          </li>
                        </ul>
                      </section>
                      <br />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ));
    } else return <div />;
  }
}
