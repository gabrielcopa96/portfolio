import { type JSXElementConstructor, type ReactElement } from "react"

const Home = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <div>
         <h2>Bienvenido al home</h2>
      </div>
   )
}

export default Home;