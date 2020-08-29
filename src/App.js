import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogHome from "./components/blog/blogHome";
import NavBar from "./components/common/navBar";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Footer from "./components/common/footer/footer";
import "../src/images//fontawesome-free-5.14.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = { darkMode: false };

  handleDarkModeToggle = () => {
    const darkMode = !this.state.darkMode;
    this.setState({ darkMode });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          onDarkModeToggle={this.handleDarkModeToggle}
          darkMode={this.state.darkMode}
        />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/blog/" component={BlogHome} />
          <Route path="/page_not_found/" component={PageNotFound} />
          <Redirect to="/page_not_found/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
