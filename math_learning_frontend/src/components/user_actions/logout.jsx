import { useLogout } from "../../services/auth";

const LogoutUser = () => {
  useLogout();
  return null;
};

export default LogoutUser;
