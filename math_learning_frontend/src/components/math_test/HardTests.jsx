import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MidUserTest from "./MiduserTest";
import MidTestResultLogic from "./esTestResultLogic";
import MathSiteBtn from "../common/mathSiteBtn";
import TestResultShowScore from "./testResultScore";
import HardUserTest from "./HarduserTest";

const HardTest = () => {
  return (
    <React.Fragment>
      <div className="test-btn-container">
        <Link className="ex-link" to="/tests/yourtest/hard/make-test">
          <MathSiteBtn
            type="button"
            value="Make Test"
            className="make-test-btn"
          />
        </Link>
      </div>
      <Switch>
        <Route path="/tests/yourtest/hard/make-test" component={HardUserTest} />
      </Switch>
    </React.Fragment>
  );
};

export default HardTest;
