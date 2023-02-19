import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import EasyTest from "./esTests";
import EasyUserTest from "./easyuserTest";
import EasyTestResultLogic from "./esTestResultLogic";
import TestResultShowScore from "./testResultScore";
import MidTest from "./MidTests";
import MidTestResultLogic from "./MidTestResultLogic";
import MidUserTest from "./MiduserTest";
import HardTest from "./HardTests";
import HardTestResultLogic from "./HardTestResultLogic";

const TestLvl = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Select the level of advancement</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/tests/yourtest/easy">
          <MathSiteBtn type="button" id="" className="es-btn" value="Easy">
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/tests/yourtest/mid">
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Advanced"
            className="mid-btn"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/tests/yourtest/hard">
          <MathSiteBtn type="button" id="" value="Hard" className="hard-btn">
            <span></span>
          </MathSiteBtn>
        </Link>
      </div>

      <Switch>
        <Route path="/tests/yourtest/easy" component={EasyTest} />
        <Route path="/tests/yourtest/mid" component={MidTest} />
        <Route path="/tests/yourtest/hard" component={HardTest} />

        <Route path="/tests/easy-test-result" component={EasyTestResultLogic} />
        <Route path="/tests/mid-test-result" component={MidTestResultLogic} />
        <Route path="/tests/hard-test-result" component={HardTestResultLogic} />
        <Route path="/tests/result-score" component={TestResultShowScore} />
      </Switch>
    </React.Fragment>
  );
};

export default TestLvl;
