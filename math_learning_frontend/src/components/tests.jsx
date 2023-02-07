import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MathSiteBtn from "./common/mathSiteBtn";
import UserTest from "./common/userTest";
import TestResult from "./common/testResult";
import NextBtn from "./common/nextBtn";

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
