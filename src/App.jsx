import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
