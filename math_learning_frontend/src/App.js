import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Banner from "./components/banner";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Tests from "./components/tests";
import Exercises from "./components/ex";
import Login from "./components/login";
import Register from "./components/register";
import jwt_decode from "jwt-decode";
import Logout from "./components/logout";
import ShowLoggedUser from "./components/loggedOnUser";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("jwtToken");
      const user = jwt_decode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <NavBar user={this.state.user} />
        {this.state.user && <ShowLoggedUser />}
        <main>
          <Switch>
            <Route path="/tests" component={Tests} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Home} />
            <Redirect from="/" to="/" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
