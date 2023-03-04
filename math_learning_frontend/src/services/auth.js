import { useEffect } from "react";

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
        localStorage.setItem("nickname", user.nickname);
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

export const registerUser = ({ user, setError, error, history }) => {
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

export const useLogout = () => {
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtRefreshToken");
    localStorage.removeItem("nickname");
    window.location = "/";
  }, []);

  return null;
};

export const userChangePasswordFetch = ({ newPassword, setError, error }) => {
  fetch("http://127.0.0.1:8000/auth/users/set_password/", {
    method: "POST",
    headers: {
      Authorization: "JWT " + localStorage.getItem("jwtToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      new_password: newPassword.new_password,
      current_password: newPassword.current_password,
    }),
  })
    .then((res) => {
      if (res.status === 400) {
        setError({
          ...error,
          change_password: "Something went wrong try again ",
        });
        return;
      } else if (res.status !== 400) {
        if (res.ok) {
          setError({
            ...error,
            change_password: "Password changed successfully",
          });
          return fetch("http://127.0.0.1:8000/auth/jwt/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickname: localStorage.getItem("nickname"),
              password: newPassword.new_password,
            }),
          });
        }
      }
    })
    .then((res) => {
      if (res.ok) {
        window.close();
      }
    })
    .then((data) => {})
    .catch((error) => {});
};

export const useRefreshAccessToken = () => {
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("jwtRefreshToken")) {
        fetch("http://127.0.0.1:8000/auth/jwt/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: localStorage.getItem("jwtRefreshToken"),
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            localStorage.setItem("jwtToken", data.access);
            localStorage.setItem("jwtRefreshToken", data.refresh);
          })
          .catch((error) => {});
      }
    }, 900000);
  }, []);
};
