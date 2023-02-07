import React, { useState, useEffect } from "react";
const ShowLoggedUser = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

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
        <div>
          <p>Nickname: {data.nickname}</p>
          <p>Score: {data.score}</p>
          <p>Rating: {data.rating}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowLoggedUser;
