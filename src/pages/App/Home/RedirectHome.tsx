import { useEffect, type JSXElementConstructor, type ReactElement } from "react"
import Loading from "../../../components/Loading/Loading";
import { useAppDispatch } from "../../../hooks/useRedux";
import { useNavigate } from "react-router-dom";
import { setSection } from "../../../redux/slices/SectionSlice/SectionSlice";

const RedirectHome = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   useEffect(() => {
      // if (location.pathname === "/" || location.pathname === "/portfolio") {
      //    setTimeout(async () => {
      //       // (async () => {
      //       dispatch(setSection("portfolio"));
      //       navigate("/portfolio/home", { replace: true });
      //       // })()
      //    }, 5000);
      // }
   }, [])

   return <Loading />
}

export default RedirectHome;