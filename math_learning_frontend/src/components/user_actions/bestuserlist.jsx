import React, { useState } from "react";
import UserInList from "../common/userInList";
import { useGetScore } from "./../../services/getDataFromApi";

function Bestuserlist(props) {
  const [data, setData] = useState([]);

  useGetScore({ setData });

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
