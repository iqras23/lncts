import React from "react";
import Slider from "./Slider";

export default class App extends React.Component {
  state = {
    items: [],
    isLoading: true
  };

  componentDidMount() {
    fetch("https://csdept-api.herokuapp.com/showcaseItems/")
      .then(body => body.json())
      .then(items => {
        this.setState({ items: items.items, isLoading: false });
      });
  }

  render() {
    var res;
    var images = [];

    for (var i = 0; i < this.state.items.length; i++) {
      images.push({
        image: "https://csdept-api.herokuapp.com/" + this.state.items[i].image,
        title: this.state.items[i].title
      });
    }

    if (this.state.isLoading) {
      res = <p>loading</p>;
    } else {
      res = <Slider images={images} />;
    }

    return res;
  }
}
