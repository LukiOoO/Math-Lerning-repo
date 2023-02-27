import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";

const GetLvl = ({ routeAndPath }) => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">Select the level of advancement</h1>
      <div className="ex-btn-container">
        {routeAndPath.map(({ path, component }) => (
          <Link key={path} className="ex-link" to={path}>
            <MathSiteBtn
              className={`${path.split("/").pop()}-btn`}
              type="button"
              value={path.split("/").pop().toUpperCase()}
            />
          </Link>
        ))}
      </div>

      <Switch>
        {routeAndPath.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default GetLvl;
