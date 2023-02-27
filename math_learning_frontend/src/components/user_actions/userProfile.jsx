import React, { useState } from "react";
import { Link } from "react-router-dom";
import MathSiteBtn from "../common/mathSiteBtn";
import { useGetUserScore } from "../../services/getDataFromApi";

const UserProfilePage = () => {
  const [youLastTests, setLastTests] = useState([]);

  useGetUserScore({ setLastTests });

  return (
    <React.Fragment>
      <div className="user-profile-container">
        <div className="change-password-container">
          <p className="p-change-password">
            if you want to change your password you can do it here{" "}
          </p>
          <Link to="/change-password" target="_blank">
            <MathSiteBtn
              value="CLick to Change Password"
              className="open-password-page"
            />
          </Link>
        </div>

        <div className="user-last-tests-container">
          <h2>These are your latest tests</h2>
          <ol className="last-tests-ol">
            {youLastTests.map((test, index) => (
              <li key={index}>
                Correct: {test.correct} Mistakes: {test.mistakes}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserProfilePage;
