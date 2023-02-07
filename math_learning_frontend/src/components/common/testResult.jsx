import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const TestResult = (props) => {
  const { tests, inputValues } = props.location.state;

  const jwt = localStorage.getItem("jwtToken");
  const userId = jwt_decode(jwt)["user_id"];

  let correct = 0;
  let mistakes = 0;

  let x = [];
  tests.map((item) => {
    x.push(item.result);
  });

  for (let i = 0; i < x.length; i++) {
    if (x[i] == inputValues[i]) {
      correct++;
    } else {
      mistakes++;
    }
  }
  const data = {
    correct: correct,
    mistakes: mistakes,
    user_id: `${userId}`,
  };
  //   fetch("http://127.0.0.1:8000/test/get-test/", {
  //     headers: {
  //       Authorization: "JWT " + localStorage.getItem("jwtToken"),
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });

  fetch("http://127.0.0.1:8000/test/test-result/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "JWT " + localStorage.getItem("jwtToken"),
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <React.Fragment>
      <div>
        <h1>
          <p>Correct answers: {correct}</p>
          <p>Mistakes answers: {mistakes}</p>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default TestResult;
