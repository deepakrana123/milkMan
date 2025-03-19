import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./Pages/History";
import Header from "./sharedComponent/Header";
import AppMain from "./Pages/AppMain";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "80px 1fr",
      }}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
}

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AppMain />} />
          <Route path="/milkHistory" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
};
