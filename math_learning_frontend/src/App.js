import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Banner from "./components/basic_site_element/banner";
import Home from "./components/basic_site_element/home";
import Login from "./components/user_actions/login";
import Register from "./components/user_actions/register";
import jwt_decode from "jwt-decode";
import LogoutUser from "./components/user_actions/logout";
import ShowLoggedUser from "./components/user_actions/loggedOnUser";
import Footer from "./components/basic_site_element/footer";
import UserProfilePage from "./components/user_actions/userProfile";
import ExLvl from "./components/ex/exLlvl";
import UserChangePassword from "./components/user_actions/userChangePassword";
import TestLvl from "./components/math_test/testLvl";
import StartEasyTest from "./components/math_test/startEsTest";
import TestResultShowScore from "./components/math_test/testResultShowScore";
import StartAdvancedTest from "./components/math_test/startAdvancedTest";
import StartHardTest from "./components/math_test/startHardTest";
import { useRefreshAccessToken } from "./services/auth";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("jwtToken");
      const decodedJwt = jwt_decode(jwt);
      setUser(decodedJwt);
    } catch (ex) {}
  }, []);

  useRefreshAccessToken();

  return (
    <React.Fragment>
      <Banner user={user} />

      {user && <ShowLoggedUser />}
      <main>
        <Switch>
          <Route path="/exercises" component={ExLvl} />
          <Route path="/test-lvl" component={TestLvl} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={LogoutUser} />
          <Route path="/user-profile" component={UserProfilePage} />
          <Route path="/change-password" component={UserChangePassword} />

          <Route path="/tests/easy" component={StartEasyTest} />
          <Route path="/tests/advanced" component={StartAdvancedTest} />
          <Route path="/tests/hard" component={StartHardTest} />
          <Route path="/tests/result-score" component={TestResultShowScore} />

          <Route path="/">
            <Home user={user} />
          </Route>
          <Redirect from="/" to="/" />
        </Switch>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default App;
