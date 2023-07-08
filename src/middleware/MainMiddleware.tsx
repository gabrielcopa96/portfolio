import { type JSXElementConstructor, type ReactElement, lazy, useEffect, Suspense } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from '../hooks/useRedux';
import { setPath, setSection } from "../redux/slices/SectionSlice/SectionSlice";

const AdminMiddleware = lazy(() => import("./AdminMiddleware"));
const PortfolioMiddleware = lazy(() => import("./PortfolioMiddleware"));
const LayoutPorfolio = lazy(() => import("../layouts/LayoutPorfolio"));

const MainMiddleware = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

   const location = useLocation();

   const navigate = useNavigate();

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (location.pathname === '/admin') {
         (async () => {
            dispatch(setSection("admin"));
            dispatch(setPath("/admin"));
            navigate("/admin/home", { replace: true });
         })()
      }

      if ((location.pathname === "/" || location.pathname === "/portfolio") && location.search === "") {
         (async () => {
            dispatch(setSection("portfolio"));
            navigate("/portfolio?section=home", {
               replace: true,
            });
         })()
      }
   }, [])

   return (
      <Routes>
         <Route path={"/admin"} element={<AdminMiddleware />}>
            <Route
               path="/admin/home"
               element={<div>
                  <h1>Estoy en mi ruta home de admin</h1>
               </div>}
            />
         </Route>
         <Route path={location.pathname === "/" ? "/" : "/portfolio"} element={<PortfolioMiddleware />}>
            <Route
               path="/portfolio"
               element={<LayoutPorfolio />}
            />
         </Route>
      </Routes>
   )
}

export default MainMiddleware;