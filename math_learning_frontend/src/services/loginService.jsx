export const loginUser = ({ user, setError, error }) => {
  fetch("http://127.0.0.1:8000/auth/jwt/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401) {
        setError({ ...error, loginer: "Incorrect password or nickname" });
      } else if (res.status !== 400 && res.status !== 401) {
        window.location = "/";
      } else {
        setError({});
      }

      return res.json();
    })
    .then((data) => {
      if (Object.keys(error).length === 0 && !error.loginer) {
        localStorage.setItem("jwtToken", data.access);
        localStorage.setItem("jwtRefreshToken", data.refresh);
      }
    })
    .catch((error) => {});
};
