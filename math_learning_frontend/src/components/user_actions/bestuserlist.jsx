import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInList from "../common/userInList";

function Bestuserlist(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/score/");
        setData(result.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="best-users-list">
      <h1 className="h1-list">Best Users Rating</h1>
      {data.length ? (
        <ol>
          {data.map((item) => (
            <UserInList
              key={item.nickname}
              nickname={item.nickname}
              score={item.score}
              rating={item.rating}
            />
          ))}
        </ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Bestuserlist;
