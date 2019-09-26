import React, { Component } from "react";
import "./calendar.css";
import { WanderingCubes } from "better-react-spinkit";
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
    var res;
    if (!this.state.isLoading) {
      return (
        <div
          style={{ minHeight: "550px", marginBottom: "100px", clear: "both" }}
        >
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
          {this.state.calendars.map(calendar => (
            <div className="calendar" id="calendar">
              <div class="responsive">
                <br />
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
                    href={"https://csdept-api.herokuapp.com/" + calendar.image}
                  >
                    <img
                      src={"https://csdept-api.herokuapp.com/" + calendar.thumb}
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
      );
    } else {
      return <div />;
    }
  }
}
