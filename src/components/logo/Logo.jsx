import React from "react";
import OddaTree from "../../components/logo/odda-tree.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={OddaTree} alt="odda-tree" />
    </div>
  );
};

export default Logo;
