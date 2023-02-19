import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import AdAdding from "./adAdding";
import AdDividing from "./adDividing";
import AdMultiplication from "./adMultiplication";
import AdSubtraction from "./adSubtraction";

const AdvancedExercises = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Advanced Exercises</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/exercises/advanced/adding">
          <MathSiteBtn
            type="button"
            id="btn-add"
            value="Adding"
            className="btn-add"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/advanced/subtraction">
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Subtraction"
            className="btn-sub"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/advanced/multiplication">
          <MathSiteBtn
            type="button"
            id="btn-mul"
            value="Multiplication"
            className="btn-mul"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/advanced/dividing">
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
        <Route path="/exercises/advanced/adding" component={AdAdding} />
        <Route
          path="/exercises/advanced/subtraction"
          component={AdSubtraction}
        />
        <Route
          path="/exercises/advanced/multiplication"
          component={AdMultiplication}
        />
        <Route path="/exercises/advanced/dividing" component={AdDividing} />
      </Switch>
    </React.Fragment>
  );
};

export default AdvancedExercises;
