import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LearnerRegister from "./pages/LearnerRegister";
import Home from './pages/home';
import Login from './pages/login';
import LearnerDashboard from './pages/LearnerDashboard';
import SubmitTest from './pages/submitTest';
import InstructorDashboard from './pages/instructorDashboard';
import TestCreationPage from './pages/test';

function App() {

  // 🔁 Wake up the backend on app load
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/`)
      .then(() => console.log("✅ Backend warmed up"))
      .catch(err => console.error("❌ Backend ping failed", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learner/register" element={<LearnerRegister />} />
        <Route path="/learner/login" element={<Login />} />
        <Route path="/learner/dashboard" element={<LearnerDashboard />} />
        <Route path="/submit-test" element={<SubmitTest />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/create-test" element={<TestCreationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
