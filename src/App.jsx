import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth"/>
      <Home />
    </BrowserRouter>
  );
}

export default App;
