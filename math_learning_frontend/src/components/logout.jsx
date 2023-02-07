import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("jwtToken");
    window.location = "/";
  }, []);

  return null;
};

export default Logout;
