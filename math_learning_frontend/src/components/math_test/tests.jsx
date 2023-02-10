import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTest from "./userTest";
import TestResultLogic from "./testResultLogic";
import MathSiteBtn from "../common/mathSiteBtn";
import TestResultShowScore from "./testResultScore";

const Test = () => {
  return (
    <React.Fragment>
      <Link className="ex-link" to="/tests/yourtest">
        <MathSiteBtn type="button" id="btn-add" value="Make Test" />
      </Link>

      <Switch>
        <Route path="/tests/yourtest" component={UserTest} />
        <Route path="/tests/result" component={TestResultLogic} />
        <Route path="/tests/result-score" component={TestResultShowScore} />
      </Switch>
    </React.Fragment>
  );
};

export default Test;
