import React, { useState, useEffect } from "react";

const ShowLoggedUser = () => {
  const [data, setData] = useState();
  const [error] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://127.0.0.1:8000/mathuser/me/", {
        headers: {
          Authorization: "JWT " + localStorage.getItem("jwtToken"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
