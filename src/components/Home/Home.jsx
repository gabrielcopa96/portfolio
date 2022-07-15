import React from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import Projects from '../Projects/Projects.jsx';
import Resume from '../Resume/Resume.jsx';
import Form from '../Formulario/Form.jsx';

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <NavBar theme={ theme } setTheme={setTheme}/>
      <Projects theme={ theme }/>
      <Resume theme={ theme }/>
      <Form theme={ theme }/>
    </>
  )
}

export default Home;