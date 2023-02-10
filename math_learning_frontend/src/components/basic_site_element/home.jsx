import React from "react";
import Bestuserlist from "../user_actions/bestuserlist";

const Home = ({ user }) => {
  return (
    <React.Fragment>
      <h1 className="h1-home-page">Home</h1>
      <div className="home-page">
        <Bestuserlist />
        <div>
          <p className="p-home-page">
            This is a site for learning math you can solve tests and do
            exercises
          </p>
          <br />
          {!user && (
            <strong className="strong-home">
              To perform tests you must log in
            </strong>
          )}
          {user && (
            <React.Fragment>
              <div className="ranks-info">
                <h3>You can perform tests</h3>
                <h2>Ranks</h2>
                <span>1. Gm -- Grand Master 400 ptk</span>
                <br />
                <span>2. M -- Master: 200 - 399 ptk</span>
                <br />
                <span>3. A -- Advanced: 100 - 199 ptk</span>
                <br />
                <span>4. B -- Beginer: 0 - 99 ptk</span>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
