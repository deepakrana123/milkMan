import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/milkHistory");
  };

  return (
    <header className="header">
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Milk Man
      </h1>
      <button className="naviagtion_Button" onClick={handleNavigate}>
        Milk History
      </button>
    </header>
  );
}

export default Header;
