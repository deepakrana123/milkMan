import React from "react";

const QuantityForm = ({
  handleSubmission,
  setInitialValue,
  initialValue,
  handleClose,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "600px",
      }}
    >
      <input
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        placeholder="Enter quantity"
        value={initialValue?.milk_quantity}
        onChange={(event) =>
          setInitialValue((prev) => ({
            ...prev,
            milk_quantity: event.target.value,
          }))
        }
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
      <button
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => handleSubmission()}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Save
      </button>
      <button
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#dc3545",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onClick={handleClose}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
      >
        Close
      </button>
    </div>
  );
};

export default QuantityForm;
