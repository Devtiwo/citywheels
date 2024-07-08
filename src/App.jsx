import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
