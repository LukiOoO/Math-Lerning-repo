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
import EasyTest from "./components/math_test/esTests";
import MidTest from "./components/math_test/MidTests";
import HardTest from "./components/math_test/HardTests";
import TestResultShowScore from "./components/math_test/testResultScore";
import HardTestResultLogic from "./components/math_test/HardTestResultLogic";
import MidTestResultLogic from "./components/math_test/MidTestResultLogic";
import EasyTestResultLogic from "./components/math_test/esTestResultLogic";

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
            <Route path="/test-lvl" component={TestLvl} />
            <Route path="/exercises" component={ExLvl} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/user-profile" component={UserProfilePage} />
            <Route path="/change-password" component={UserChangePassword} />

            <Route path="/tests/yourtest/easy" component={EasyTest} />
            <Route path="/tests/yourtest/mid" component={MidTest} />
            <Route path="/tests/yourtest/hard" component={HardTest} />
            <Route
              path="/tests/easy-test-result"
              component={EasyTestResultLogic}
            />
            <Route
              path="/tests/mid-test-result"
              component={MidTestResultLogic}
            />
            <Route
              path="/tests/hard-test-result"
              component={HardTestResultLogic}
            />
            <Route path="/tests/result-score" component={TestResultShowScore} />

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
