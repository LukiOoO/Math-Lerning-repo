import { useEffect } from "react";

const RefreshAccessToken = () => {
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
    }, 300000);
  }, []);

  return null;
};

export default RefreshAccessToken;
