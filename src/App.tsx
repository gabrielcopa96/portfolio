import { useState, SetStateAction, Dispatch, ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from "./layouts/Home";

function App(): ReactElement<HTMLElement> {

  const [theme, setTheme]: [string, Dispatch<SetStateAction<string>>] = useState("dark");

  return (
    <div className={theme === "light" ? "body-white" : "body"}>
      <BrowserRouter>
        <Home theme={theme} setTheme={setTheme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
