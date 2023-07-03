import { Await, Outlet } from "react-router-dom";

const PortfolioMiddleware = () => {
   return (
      <Await
         resolve={true}
         children={<Outlet />}
      />
   )
}

export default PortfolioMiddleware;