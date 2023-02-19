import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import AdvancedExercises from "./advancedEx";
import EasyExercises from "./easyEx";
import HardExercises from "./hardEx";
const ExLvl = () => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Select the level of advancement</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to="/exercises/easy">
          <MathSiteBtn className="es-btn" type="button" id="" value="Easy">
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/advanced">
          <MathSiteBtn
            type="button"
            className="mid-btn"
            id="btn-sub"
            value="Advanced"
          >
            <span></span>
          </MathSiteBtn>
        </Link>
        <Link className="ex-link" to="/exercises/hard">
          <MathSiteBtn type="button" className="hard-btn" id="" value="Hard">
            <span></span>
          </MathSiteBtn>
        </Link>
      </div>

      <Switch>
        <Route path="/exercises/easy" component={EasyExercises} />
        <Route path="/exercises/advanced" component={AdvancedExercises} />
        <Route path="/exercises/hard" component={HardExercises} />
      </Switch>
    </React.Fragment>
  );
};

export default ExLvl;
