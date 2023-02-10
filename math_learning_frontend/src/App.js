import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Banner from "./components/basic_site_element/banner";
import NavBar from "./components/basic_site_element/navBar";
import Home from "./components/basic_site_element/home";
import Test from "./components/math_test/tests";
import Exercises from "./components/ex/ex";
import Login from "./components/user_actions/login";
import Register from "./components/user_actions/register";
import jwt_decode from "jwt-decode";
import Logout from "./services/logoutService";
import ShowLoggedUser from "./components/user_actions/loggedOnUser";
import RefreshAccessToken from "./services/refreshAccessJwt";
import Footer from "./components/basic_site_element/footer";
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
        <RefreshAccessToken />
        <Banner />
        <NavBar user={this.state.user} />
        {this.state.user && <ShowLoggedUser />}
        <main>
          <Switch>
            <Route path="/tests" component={Test} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/">
              <Home user={this.state.user} />
            </Route>
            <Redirect from="/" to="/" />
          </Switch>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
