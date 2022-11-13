import React from "react";
import "./Home.css";
import OromoFlag from "../../assets/images/oromo-flag.png";

const Home = () => {
  return (
    <div>
      <img className="bg-image" src={OromoFlag} alt="oromo-flag" />
    </div>
  );
};

export default Home;
