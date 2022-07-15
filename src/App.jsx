import React, { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {

  const [theme, setTheme] = useState("dark");

  //? Guardar en un contexto y utilizar en cada una de las paginas

  // const ThemeContext = createContext();

  return (
    <div className={theme === "light" ? "body-white" : "body"}>
      <BrowserRouter>
        <Home theme={theme} setTheme={setTheme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
