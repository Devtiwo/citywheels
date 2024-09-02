import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  let token = localStorage.token;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (<Preloader />) : (
      <>
      <ScrollToHashElement behavior="smooth"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to= "/login"/>} />
      </Routes>
      <ToastContainer />
      </>
      )}
    </BrowserRouter>
  );
}

export default App;
