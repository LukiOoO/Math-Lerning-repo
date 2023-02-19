import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import EsAdding from "./esAdding";
import EsDividing from "./esDividing";
import EsMultiplication from "./esMultiplication";
import EsSubtraction from "./esSubtraction";

const EasyExercises = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Easy Exercises</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/exercises/easy/adding">
          <MathSiteBtn
            type="button"
            id="btn-add"
            value="Adding"
            className="btn-add"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/easy/subtraction">
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Subtraction"
            className="btn-sub"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/easy/multiplication">
          <MathSiteBtn
            type="button"
            id="btn-mul"
            value="Multiplication"
            className="btn-mul"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/easy/dividing">
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
        <Route path="/exercises/easy/adding" component={EsAdding} />
        <Route path="/exercises/easy/subtraction" component={EsSubtraction} />
        <Route
          path="/exercises/easy/multiplication"
          component={EsMultiplication}
        />
        <Route path="/exercises/easy/dividing" component={EsDividing} />
      </Switch>
    </React.Fragment>
  );
};

export default EasyExercises;
