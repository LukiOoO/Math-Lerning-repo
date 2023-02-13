import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import Table from "./../common/testTable";

const UserTest = () => {
  const [tests, setTests] = useState([]);
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test/get-test/", {
      headers: {
        Authorization: "JWT " + localStorage.getItem("jwtToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => setTests(data["Your Test"]))
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <form>
        <Table
          tests={tests}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      </form>
      <Link
        className="ex-link"
        to={{ pathname: "/tests/result", state: { inputValues, tests } }}
      >
        <MathSiteBtn
          type="button"
          onClick={() => window.location.reload(false)}
          value="Cheack"
        />
      </Link>
    </React.Fragment>
  );
};

export default UserTest;