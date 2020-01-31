import React, { Component } from "react";

export default class Subscribe extends Component {
  state = {
    id: "",
    message: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    this.setState({
      id: ""
    });
    event.preventDefault();
    fetch("https://csdept-api.herokuapp.com/emails", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id
      })
    })
      .then(response => response.json())
      .then(body =>
        this.setState({
          message: body.message
        })
      );
  };

  render() {
    return (
      <div>
        <section id="contact" className="section green">
          <div className="container">
            <h4>Subscribe With Us</h4>

            <div className="blankdivider30"></div>
            <div className="row">
              <div className="span12">
                <div className="cform" id="contact-form">
                  <form>
                    <div className="row">
                      <div className="span6 offset2">
                        <div className="field your-email form-group">
                          <input
                            type="text"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            placeholder="Your Email"
                          />{" "}
                        </div>
                      </div>
                      <div className="span3">
                        <input
                          type="submit"
                          value="Subscribe"
                          className="btn btn-theme pull-left"
                          onClick={this.handleSubmit}
                        />
                      </div>{" "}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h5 style={{ color: "white" }}>
                        <strong>{this.state.message}</strong>
                      </h5>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
