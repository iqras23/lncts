import React, { Component } from "react";
import "./events.css";
import { WanderingCubes } from "better-react-spinkit";
export default class Events extends Component {
  state = {
    isLoading: false,
    events: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://csdept-api.herokuapp.com/events")
      .then(response => response.json())
      .then(events => {
        console.log(events.events[0]);

        this.setState({
          events: events.events,
          isLoading: false
        });
      });
  }
  render() {
    var orient;

    if (!this.state.isLoading) {
      return this.state.events.map((event, index) => (
        <div className="body1">
          {console.log(this.state.events[0].title)}
          <div
            id="wrapper"
            class="divided"
            key={event._id}
            style={{
              backgroundColor: "_palette(bg)",
              color: "_palette(fg)",
              fontFamily: "Source Sans Pro Helvetica sans-serif",
              fontSize: "1rem",
              lineHeight: "1.7",
              whiteSpace: "pre-line"
            }}
          >
            <section
              {...(orient = index % 2 === 0 ? "orient-left" : "orient-right")}
              class={
                "spotlight style1 " +
                orient +
                " content-align-left image-position-center onscroll-image-fade-in"
              }
              // id="first"
            >
              <div class="content">
                <h2
                  style={{
                    fontSize: "1.5rem",
                    color: "black",
                    fontFamily: "Rambla"
                  }}
                >
                  {event.title}
                </h2>
                <h4 style={{ fontSize: "1rem", fontFamily: "Rambla" }}>
                  {event.formattedDate}
                </h4>
                <p style={{ margin: "0 0 2rem 0", fontFamily: "Reem Kufi" }}>
                  {event.body}
                </p>
              </div>{" "}
              <div
                class="image"
                style={{
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <img
                  src={"https://csdept-api.herokuapp.com/" + event.image}
                  alt=""
                />
              </div>
              <hr
                style={{
                  borderBottomColor: "rgba(0, 0, 0, 0.2)",
                  border: "0",
                  borderbottom: "solid 1px",
                  margin: "2.5rem 0"
                }}
              />
            </section>
          </div>
        </div>
      ));
    } else
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
