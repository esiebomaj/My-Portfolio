import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogHome from "./components/blog/blogHome";
import NavBar from "./components/common/navBar/navBar";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Footer from "./components/common/footer/footer";
import "../src/images//fontawesome-free-5.14.0-web/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class App extends Component {
  state = { darkMode: false, scrollTop: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollTop: window.pageYOffset });
  };

  handleDarkModeToggle = () => {
    const darkMode = !this.state.darkMode;
    this.setState({ darkMode });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          scrollTop={this.state.scrollTop}
          onDarkModeToggle={this.handleDarkModeToggle}
          darkMode={this.state.darkMode}
        />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(props) => (
              <Home
                {...props}
                scrollTop={this.state.scrollTop}
                darkMode={this.state.darkMode}
              />
            )}
          />
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
