import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";

const StartTets = ({ path, component, resultLogicPath, resutlLComponent }) => {
  return (
    <React.Fragment>
      <div className="test-btn-container">
        <Link className="ex-link" to={path}>
          <MathSiteBtn
            type="button"
            value="Make Test"
            className="make-test-btn"
          />
        </Link>
      </div>
      <Switch>
        <Route path={path} component={component} />
        <Route path={resultLogicPath} component={resutlLComponent} />
      </Switch>
    </React.Fragment>
  );
};

export default StartTets;
