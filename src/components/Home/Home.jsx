import React from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import Projects from '../Projects/Projects.jsx';
import Resume from '../Resume/Resume.jsx';
import Form from '../Formulario/Form.jsx';

const Home = () => {
  return (
    <>
      <NavBar/>
      <Projects />
      <Resume />
      <Form />
    </>
  )
}

export default Home