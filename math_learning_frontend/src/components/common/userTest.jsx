import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MathSiteBtn from "./mathSiteBtn";

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
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th colSpan={2}>B</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <tr key={index}>
                <td>{test.a}</td>
                <td>{test.operator}</td>
                <td>{test.b}</td>

                <td>
                  =
                  <input
                    type="number"
                    value={inputValues[index] || ""}
                    onChange={(e) =>
                      setInputValues({
                        ...inputValues,
                        [index]: e.target.value,
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
