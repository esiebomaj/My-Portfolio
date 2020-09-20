import React, { Component } from "react";
import Emoji from "./../common/Emoji";
import "./pageNotFound.css";

class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <section className="page-not-found">
        <h1>
          <Emoji symbol="😔" /> Page Not Found <Emoji symbol="😔" />{" "}
        </h1>
      </section>
    );
  }
}

export default PageNotFound;
