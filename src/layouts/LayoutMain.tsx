import { ReactElement } from 'react'
import { typePropsHome } from '../interfaces/layouts/main.interface';
import Home from '../views/Home/Home';
import Projects from '../views/Projects/Projects';
import AboutMe from '../views/AboutMe/AboutMe';
import Contacts from '../views/Contacts/Contacts';


const LayoutMain = ({ theme, setTheme }: typePropsHome): ReactElement<any>=> {
   return (
     <>
       <Home />
       {/* <Projects /> */}
       {/* <AboutMe /> */}
       {/* <Contacts /> */}
     </>
   )
 }
 
 export default LayoutMain;