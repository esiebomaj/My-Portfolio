import React, { Component } from "react";
import Emoji from "./../common/Emoji";
import "./blogHome.css";

class BlogHome extends Component {
  state = {};
  render() {
    return (
      <div className="blog-home">
        <h1 className="text-danger">Blog Home</h1>
        <br />
        <h2>
          <Emoji symbol="🚧" />
          <Emoji symbol="🚧" />
        </h2>
        <br />
        <h2>
          <Emoji symbol="👨‍💻" />
          Blog is currently under construction
          <Emoji symbol="👨‍💻" />
        </h2>
      </div>
    );
  }
}

export default BlogHome;
