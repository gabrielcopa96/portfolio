import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
