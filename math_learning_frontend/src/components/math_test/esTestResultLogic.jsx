import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const EasyTestResultLogic = (props) => {
  const { tests, inputValues } = props.location.state;
  const history = useHistory();

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
    level: "easy",
  };

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
      history.push({
        pathname: "/tests/result-score",
        state: { correct, mistakes },
      });
    })
    .catch((error) => {});

  return null;
};

export default EasyTestResultLogic;
