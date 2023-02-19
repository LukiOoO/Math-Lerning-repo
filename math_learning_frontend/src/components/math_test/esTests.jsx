import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import EasyUserTest from "./easyuserTest";
import EasyTestResultLogic from "./esTestResultLogic";
import MathSiteBtn from "../common/mathSiteBtn";
import TestResultShowScore from "./testResultScore";

const EasyTest = () => {
  return (
    <React.Fragment>
      <div className="test-btn-container">
        <Link className="ex-link" to="/tests/yourtest/easy/make-test">
          <MathSiteBtn
            type="button"
            value="Make Test"
            className="make-test-btn"
          />
        </Link>
      </div>
      <Switch>
        <Route path="/tests/yourtest/easy/make-test" component={EasyUserTest} />
      </Switch>
    </React.Fragment>
  );
};

export default EasyTest;
