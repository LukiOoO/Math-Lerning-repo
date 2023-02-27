import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { saveTestResult } from "../../services/sendDataToAPi";

const TestResultLogic = (props) => {
  const { tests, inputValues, testLvl } = props.location.state;
  const history = useHistory();

  const jwt = localStorage.getItem("jwtToken");
  const userId = jwt_decode(jwt)["user_id"];

  let correct = 0;
  let mistakes = 0;

  let x = [];
  tests.map((item) => {
    return x.push(item.result);
  });

  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) === parseInt(inputValues[i])) {
      correct++;
    } else {
      mistakes++;
    }
  }
  const data = {
    correct: correct,
    mistakes: mistakes,
    user_id: `${userId}`,
    level: `${testLvl}`,
  };

  saveTestResult({ correct, mistakes }, history, data);

  return null;
};

export default TestResultLogic;
