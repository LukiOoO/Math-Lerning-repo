import React from "react";
import Bestuserlist from "../user_actions/bestuserlist";

const Home = () => {
  return (
    <React.Fragment>
      <h1 className="h1-home-page">Home</h1>
      <div className="home-page">
        <Bestuserlist />
        <p className="p-home-page">
          This is a site for learning math you can solve tests and do exercises
          <br />
          <strong className="strong-home">
            To perform tests you must log in{" "}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
