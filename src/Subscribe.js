import React, { Component } from "react";

export default class Subscribe extends Component {
  state = {
    id: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
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
    }).then(response => console.log(response.id));
  };
  //   axios
  //     .post("https://csdept-api.herokuapp.com/emails", {
  //       id: this.state.id
  //     })
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .then(function(error) {
  //       console.log(error);
  //     });
  // };
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(body) {
  //   console.log(body);

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
                            type="email"
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
                      </div>
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
