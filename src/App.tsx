import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import ProtectedRoute from "./page/ProtectedRoute";
import Login from "./page/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            {/* <Route path="/student" element={<Student />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
