import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import Adding from "./adding";
import Dividing from "./dividing";
import Multiplication from "./multiplication";
import Subtraction from "./subtraction";

const Exercises = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Exercises</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/exercises/adding">
          <MathSiteBtn
            type="button"
            id="btn-add"
            value="Adding"
            className="btn-add"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/subtraction">
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Subtraction"
            className="btn-sub"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/multiplication">
          <MathSiteBtn
            type="button"
            id="btn-mul"
            value="Multiplication"
            className="btn-mul"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/dividing">
          <MathSiteBtn
            type="button"
            id="btn-div"
            value="Dividing"
            className="btn-div"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
      </div>

      <Switch>
        <Route path="/exercises/adding" component={Adding} />
        <Route path="/exercises/subtraction" component={Subtraction} />
        <Route path="/exercises/multiplication" component={Multiplication} />
        <Route path="/exercises/dividing" component={Dividing} />
      </Switch>
    </React.Fragment>
  );
};

export default Exercises;
