import { type JSXElementConstructor, type ReactElement } from "react"

const Logo = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <h1 style={{ color: "white" }}>Logo</h1>
   )
}

export default Logo;