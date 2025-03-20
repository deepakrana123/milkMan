import React, { useEffect, useState } from "react";
import Table from "../sharedComponent/Table";
import { useNavigate } from "react-router-dom";
import "./History.css";
import axios from "axios";
const History = () => {
  const [initialState, setInitialState] = useState([]);
  const fetchResponse = async () => {
    const response = await axios.get(
      "https://milkman.aryabhata.org/api/milkMan"
    );
    if (response.status === 200 && response.data) {
      setInitialState(response.data);
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div className="history-container">
      <Table data={initialState} />
      <button className="back_button" onClick={handleNavigate}>
        Back
      </button>
    </div>
  );
};

export default History;
