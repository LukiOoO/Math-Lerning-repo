import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import HardAdding from "./hardAdding";
import HardDividing from "./hardDividing";
import HardMultiplication from "./hardMultiplication";
import HardSubtraction from "./hardSubtraction";

const HardExercises = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Hard Exercises</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/exercises/hard/adding">
          <MathSiteBtn
            type="button"
            id="btn-add"
            value="Adding"
            className="btn-add"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/hard/subtraction">
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Subtraction"
            className="btn-sub"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/hard/multiplication">
          <MathSiteBtn
            type="button"
            id="btn-mul"
            value="Multiplication"
            className="btn-mul"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/hard/dividing">
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
        <Route path="/exercises/hard/adding" component={HardAdding} />
        <Route path="/exercises/hard/subtraction" component={HardSubtraction} />
        <Route
          path="/exercises/hard/multiplication"
          component={HardMultiplication}
        />
        <Route path="/exercises/hard/dividing" component={HardDividing} />
      </Switch>
    </React.Fragment>
  );
};

export default HardExercises;
