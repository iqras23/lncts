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
    if (!this.state.isLoading) {
      return this.state.calendars.map(calendar => (
        <div className="calendar">
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
      ));
    }
    return (
      <div
        style={{
          position: "fixed",
          top: "45%",
          left: "45%",

          transform: "translate(-50%, -50%)",
          transform: "-webkit-translate(-50%, -50%)",
          transform: "m-oz-translate(-50%, -50%)",
          transform: "-ms-translate(-50%, -50%)"
        }}
      >
        <div>
          <WanderingCubes size={100} cubeSize={20} />
        </div>
      </div>
    );
  }
}
