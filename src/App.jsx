import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme === "light" ? "body-white" : "body"}>
      <BrowserRouter>
        <Home theme={theme} setTheme={setTheme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
