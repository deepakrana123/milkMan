import React from "react";
import Table from "../sharedComponent/Table";
import { useNavigate } from "react-router-dom";
import "./History.css";
const History = () => {
  const tableData = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { id: 3, name: "Sam Green", age: 45, city: "Chicago" },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="history-container">
      <Table data={tableData} />
      <button className="back_button" onClick={handleNavigate}>
        Back
      </button>
    </div>
  );
};

export default History;
