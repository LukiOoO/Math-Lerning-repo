import React, { useState } from "react";
import { Link } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import Table from "../common/testTable";
import { useGetTest } from "../../services/getDataFromApi";

const MakeTest = ({ testLvlApi, resultLogicPath, testLvl }) => {
  const [tests, setTests] = useState([]);
  const [inputValues, setInputValues] = useState({});

  useGetTest({ testLvlApi, setTests });

  return (
    <React.Fragment>
      <form className="test-form">
        <Table
          tests={tests}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      </form>
      <Link
        className="ex-link"
        to={{
          pathname: resultLogicPath,
          state: { inputValues, tests, testLvl },
        }}
      >
        <div className="cheack-btn-container">
          <MathSiteBtn type="button" value="Cheack" className="cheack-btn" />
        </div>
      </Link>
    </React.Fragment>
  );
};

export default MakeTest;
