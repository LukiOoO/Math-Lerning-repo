import React from "react";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "./common/mathSiteBtn";
import { Link } from "react-router-dom";
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
          <MathSiteBtn type="button" id="btn-add" value="Adding" />
        </Link>
        <Link className="ex-link" to="/exercises/subtraction">
          <MathSiteBtn type="button" id="btn-add" value="Subtraction" />
        </Link>
        <Link className="ex-link" to="/exercises/multiplication">
          <MathSiteBtn type="button" id="btn-add" value="Multiplication" />
        </Link>
        <Link className="ex-link" to="/exercises/dividing">
          <MathSiteBtn type="button" id="btn-add" value="Dividing" />
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
