import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";

const ExTemplate = ({
  h1title,
  lvl,
  addComponent,
  subComponent,
  mulComponent,
  divComponent,
}) => {
  return (
    <React.Fragment>
      <h1 className="h1-ex-page">{h1title} Exercises</h1>
      <div className="ex-btn-container">
        <Link className="ex-link" to={"/exercises/" + lvl + "/adding"}>
          <MathSiteBtn
            type="button"
            id="btn-add"
            value="Adding"
            className="btn-add"
          />
        </Link>
        <Link className="ex-link" to={"/exercises/" + lvl + "/subtraction"}>
          <MathSiteBtn
            type="button"
            id="btn-sub"
            value="Subtraction"
            className="btn-sub"
          />
        </Link>
        <Link className="ex-link" to={"/exercises/" + lvl + "/multiplication"}>
          <MathSiteBtn
            type="button"
            id="btn-mul"
            value="Multiplication"
            className="btn-mul"
          />
        </Link>
        <Link className="ex-link" to={"/exercises/" + lvl + "/dividing"}>
          <MathSiteBtn
            type="button"
            id="btn-div"
            value="Dividing"
            className="btn-div"
          />
        </Link>
      </div>

      <Switch>
        <Route
          path={"/exercises/" + lvl + "/adding"}
          component={addComponent}
        />
        <Route
          path={"/exercises/" + lvl + "/subtraction"}
          component={subComponent}
        />
        <Route
          path={"/exercises/" + lvl + "/multiplication"}
          component={mulComponent}
        />
        <Route
          path={"/exercises/" + lvl + "/dividing"}
          component={divComponent}
        />
      </Switch>
    </React.Fragment>
  );
};

export default ExTemplate;
