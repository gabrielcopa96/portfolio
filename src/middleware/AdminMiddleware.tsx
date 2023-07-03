import { type JSXElementConstructor, type ReactElement } from "react"
import { Await, Outlet } from "react-router-dom";

const AdminMiddleware = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
   return (
      <Await
         resolve={true}
         children={<Outlet />}
      />
   )
}

export default AdminMiddleware;