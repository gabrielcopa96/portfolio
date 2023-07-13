import { type JSXElementConstructor, type ReactElement } from "react"
import Home from "../pages/App/Home/Home"
import { useSearchParams } from "react-router-dom"
import Contact from "../pages/App/Contacts/Contact";
import NavBar from '../components/NavBar/NavBar';

const LayoutPorfolio = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

   const [searchParams, setSearchParams] = useSearchParams();

   return (
      <>
         <NavBar />
         {
            searchParams.get("section") === "home" && <Home />
         }
         {
            searchParams.get("section") === "about" && <h1>Estoy en about</h1>
         }
         {
            searchParams.get("section") === "contact" && <Contact />
         }
      </>
   )
}

export default LayoutPorfolio;