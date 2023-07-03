import { type JSXElementConstructor, type ReactElement } from "react"
import { Await } from "react-router-dom";

const AdminMiddleware = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <Await
         resolve={true}
         // fallback={<div>Esto es un fallback</div>}
         children={<div>Esto es un children</div>}
      />
   )
}

export default AdminMiddleware;