import React, { useState } from "react";
import { useGetUserData } from "../../services/getDataFromApi";
import { useHistory } from "react-router-dom";

const ShowLoggedUser = () => {
  const [data, setData] = useState();
  const [error] = useState();
  const history = useHistory();

  useGetUserData({ setData, history });

  return (
    <div>
      {error && <p>Something went wrong: {error.message}</p>}
      {data ? (
        <div className="user-profile">
          <div className="user-helper-container">
            <p className="user-data">Nickname: {data.nickname}</p>
            <p className="user-data">Score: {data.score}</p>
            <p className="user-data">Rating: {data.rating}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowLoggedUser;
