import React from "react";
import "./Home.css";
import Events from "../events/Event";

const Home = () => {
  return (
    <div>
      <img
        className="bg-image"
        src="./assets/images/oromo-flag.png"
        alt="oromo-flag"
      />
      <div>
        <Events />
      </div>
    </div>
  );
};

export default Home;
