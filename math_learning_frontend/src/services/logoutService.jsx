import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtRefreshToken");
    localStorage.removeItem("nickname");
    window.location = "/";
  }, []);

  return null;
};

export default Logout;
