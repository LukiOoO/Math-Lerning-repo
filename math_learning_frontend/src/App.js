import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Banner from "./components/basic_site_element/banner";
import Home from "./components/basic_site_element/home";
import Login from "./components/user_actions/login";
import Register from "./components/user_actions/register";
import jwt_decode from "jwt-decode";
import Logout from "./services/logoutService";
import ShowLoggedUser from "./components/user_actions/loggedOnUser";
import RefreshAccessToken from "./services/refreshAccessJwt";
import Footer from "./components/basic_site_element/footer";
import UserProfilePage from "./components/user_actions/userProfile";
import ExLvl from "./components/ex/exLlvl";
import TestLvl from "./components/math_test/testLvl";
import UserChangePassword from "./components/user_actions/userChangePassword";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("jwtToken");
      const user = jwt_decode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }
  /* <RefreshAccessToken /> */
  render() {
    return (
      <React.Fragment>
        <Banner user={this.state.user} />

        {this.state.user && <ShowLoggedUser />}
        <main>
          <Switch>
            <Route path="/tests" component={TestLvl} />
            <Route path="/exercises" component={ExLvl} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/user-profile" component={UserProfilePage} />
            <Route path="/change-password" component={UserChangePassword} />
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
