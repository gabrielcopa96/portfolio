import { ReactElement } from 'react'
import { typePropsHome } from '../interfaces/layouts/main.interface';
import Home from '../interfaces/views/Home';
// import Projects from '../Projects/Projects';
// import Resume from '../Resume/Resume';
// import Form from '../Form/Form';

const LayoutMain = ({ theme, setTheme }: typePropsHome): ReactElement<any>=> {
   return (
     <>
       <Home />
       {/* <Projects theme={ theme }/> */}
       {/* <Resume theme={ theme }/> */}
       {/* <Form theme={ theme }/> */}
     </>
   )
 }
 
 export default LayoutMain;