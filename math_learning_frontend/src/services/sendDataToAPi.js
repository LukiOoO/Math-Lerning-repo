export const saveTestResult = ({ correct, mistakes }, history, data) => {
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
};
