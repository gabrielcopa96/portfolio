import { JSXElementConstructor, ReactElement } from "react"
import Logo from "../Logo/Logo";

const NavBar = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <header>
         <Logo />
         <nav>
            <h1 style={{ color: "white" }}>Hello</h1>
         </nav>
      </header>
   )
}

export default NavBar;