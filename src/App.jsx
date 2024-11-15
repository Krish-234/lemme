import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import { Login, Signup, Homepage, Map} from "./components/components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  
          <Route path="/explore" element={<Map />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
