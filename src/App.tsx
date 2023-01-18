import { useState, SetStateAction, Dispatch, ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

function App(): ReactElement<HTMLElement> {

  const [theme, setTheme]: [string, Dispatch<SetStateAction<string>>] = useState("dark");

  return (
    <div className={theme === "light" ? "body-white" : "body"}>
      <BrowserRouter>
        <LayoutMain theme={theme} setTheme={setTheme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
