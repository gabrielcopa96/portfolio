import { useEffect, type JSXElementConstructor, type ReactElement } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import MainMiddleware from '../middleware/MainMiddleware';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setPath, setSection } from '../redux/slices/SectionSlice/SectionSlice';
import AdminMiddleware from '../middleware/AdminMiddleware';


const LayoutMain = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

  const location = useLocation();

  const { path } = useAppSelector(state => state.section);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === "/admin") {
      (async () => {
        dispatch(setSection("admin"));
        dispatch(setPath("/admin"));
      })()
    }
  }, [])

  return (
    <Routes>
      {
        path === "/admin" && (
          <Route path={path} element={<AdminMiddleware />}>

          </Route>
        )
      }
      {
        path === "/" && (
          <Route path={path} element={<MainMiddleware />}>

          </Route>
        )
      }
    </Routes>
  )
}

export default LayoutMain;