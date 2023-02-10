import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtRefreshToken");
    window.location = "/";
  }, []);

  return null;
};

export default Logout;
