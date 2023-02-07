import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTest from "./userTest";
import TestResult from "./testResult";
import MathSiteBtn from "../common/mathSiteBtn";

const Test = () => {
  return (
    <React.Fragment>
      <Link className="ex-link" to="/tests/yourtest">
        <MathSiteBtn type="button" id="btn-add" value="Make Test" />
      </Link>

      <Switch>
        <Route path="/tests/yourtest" component={UserTest} />
        <Route path="/tests/result" component={TestResult} />
      </Switch>
    </React.Fragment>
  );
};

export default Test;
