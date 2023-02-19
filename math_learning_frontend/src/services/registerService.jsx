const registerUser = ({ user, setError, error, history }) => {
  fetch("http://127.0.0.1:8000/auth/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 400) {
        setError({ ...error, username: "The user or emial already exists" });
        return;
      } else if (res.status !== 400) {
        history.push("/login");
      }
      res.json();
    })
    .then((data) => {})
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        setError({ ...error, username: error.response.data });
      }
    });
};

export default registerUser;
