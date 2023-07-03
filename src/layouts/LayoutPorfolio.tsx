import { type JSXElementConstructor, type ReactElement } from "react"
import Home from "../pages/App/Home/Home"

const LayoutPorfolio = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <Home />
   )
}

export default LayoutPorfolio;