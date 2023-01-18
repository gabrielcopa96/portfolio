import { ReactElement } from 'react'
import { typePropsHome } from '../interfaces/layouts/home.interface';
import NavBar from '../components/NavBar/NavBar';
// import NavBar from '../NavBar/NavBar';
// import Projects from '../Projects/Projects';
// import Resume from '../Resume/Resume';
// import Form from '../Form/Form';

const Home = ({ theme, setTheme }: typePropsHome): ReactElement<any>=> {
   return (
     <>
       <NavBar />
       {/* <Projects theme={ theme }/> */}
       {/* <Resume theme={ theme }/> */}
       {/* <Form theme={ theme }/> */}
     </>
   )
 }
 
 export default Home;