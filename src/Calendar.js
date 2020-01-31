import React, { Component } from "react";
import "./calendar.css";

export default class Calendar extends Component {
  state = {
    isLoading: true,
    calendars: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/calendars")
      .then(response => response.json())
      .then(calendars => {
        console.log(calendars.calendars[0].image);

        this.setState({
          calendars: calendars.calendars,
          isLoading: false
        });
      });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="body1" id="calendar">
          <div
            id="wrapper"
            class="divided"
            style={{
              backgroundColor: "_palette(bg)",
              color: "_palette(fg)",
              fontFamily: "Source Sans Pro Helvetica sans-serif",
              fontSize: "1rem",
              lineHeight: "1.7",
              whiteSpace: "pre-line"
            }}
          >
            <div>
              <br />
              <br />
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "Rambla",
                  textDecoration: "overline"
                }}
              >
                Academic Calendar
              </h2>
              {this.state.calendars.map((calendar, index) => (
                <div key={calendar._id} className="calendar" id="calendar">
                  <div class="responsive">
                    <br />

                    <div
                      class="gallery"
                      style={{
                        boxShadow: "2.5px 5px 9px #888888"
                      }}
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          "https://csdept-api.herokuapp.com/" + calendar.image
                        }
                      >
                        <img
                          src={
                            "https://csdept-api.herokuapp.com/" + calendar.thumb
                          }
                          alt={calendar.title}
                          width="600"
                          height="400"
                        />
                      </a>

                      <div class="desc">{calendar.title + " Semester"}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
