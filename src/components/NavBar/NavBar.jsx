import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import { HeaderPortfolio, NavBarPortfolio } from "./styles/NavBarStyles.jsx";
import { BackgroundHeader } from "./elements/BackgroundHeader.jsx";
import { LogoNavBar } from "./elements/LogoNavBar.jsx";
import TitleHeader from "./elements/TitleHeader.jsx";
import ListSocialNetworks from "./elements/ListSocialNetworks.jsx";
import ContactHeader from "./elements/ContactHeader.jsx";
import styles from "./styles/background.module.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const navigation = [
  { name: "Dashboard", to: "#" },
  { name: "Team", to: "#" },
  { name: "Projects", to: "#" },
  { name: "Calendar", to: "#" },
];

const LandingHeader = styled.header`
  height: 100vh;
`;

const Active = styled.span`
  color: var(--color-Principal);
  text-decoration: none;
  cursor: pointer;
  opacity: 1;

  &:before {
    content: "<";
    padding-right: 0.3rem;
    opacity: 1;
  }

  &:after {
    content: "/>";
    padding-left: 0.2rem;
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 0;
  }
`;

const NavBar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  // const [switchActive, setSwitchActive] = useState("dark");

  const handleActive = (e) => {
    setActive(e.target.id);
  };


  window.onscroll = () => {
    const nav = document.querySelector('#nav');
    if(scrollY <= 10) {
      nav.className = 'sinscroll'
    } else {
      nav.className= 'scroll'
    }
  }

  const handleOpen = (e) => {
    e.preventDefault();

    if(open) {
      setOpen(false)
    }
    if(!open) {
      setOpen(true)
    }
  }

  const switchTheme = () => {
    if(theme === "light") {
      setTheme("dark");
    }
    if(theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <LandingHeader id="home">
      <HeaderPortfolio id="nav">
        <LogoNavBar theme={theme}/>
        <NavBarPortfolio>
          {active !== "home" ? (
            <a
              href="#home"
              id="home"
              onClick={(e) => handleActive(e)}
              style={theme === "dark" ? {} : {color: "#000"}}
              // className={active === "home" ? styles.active : ""}
            >
              Inicio
            </a>
          ) : (
            <Active>Inicio</Active>
          )}
          {active !== "project" ? (
            <a href="#projects" id="project" onClick={(e) => handleActive(e)} style={theme === "dark" ? {} : {color: "#000"}}>
              Proyectos
            </a>
          ) : (
            <Active>Proyectos</Active>
          )}
          {active !== "resumecv" ? (
            <a href="#resume" id="resumecv" onClick={(e) => handleActive(e)} style={theme === "dark" ? {} : {color: "#000"}}>
              About
            </a>
          ) : (
            <Active>About</Active>
          )}
          {active !== "about" ? (
            <a href="#about" id="aboutus" onClick={(e) => handleActive(e)} style={theme === "dark" ? {} : {color: "#000"}}>
              Contacto
            </a>
          ) : (
            <Active>Contacto</Active>
          )}
          {
            !open
            ? <MenuIcon className={styles.iconHambur} onClick={(e) => handleOpen(e)}/>
            : <XIcon className={styles.iconHambur} onClick={(e) => handleOpen(e)}/>
          }
          {/* <div className={theme === "dark" ? styles.switch : styles.switchWhite}>
            <BsFillSunFill style={{width: "30px", height: "30px", padding: ".4rem", marginRight: ".4rem", marginLeft: ".7rem"}}/>
            <div className={`${styles.btnSwitchTheme} ${theme === "dark" ? styles.btn : styles.moveSwitch}`} onClick={switchTheme}></div>
            <BsFillMoonFill  style={{width: "30px", height: "30px", padding: ".4rem", marginRight: ".4rem", marginLeft: ".7rem"}}/>
          </div> */}
        </NavBarPortfolio>
        {
            !open
            ? <></>
            : (<div className={styles.menuMobile}>
              <a href="#home">Inicio</a>
              <a href="#project">Proyectos</a>
              {/* <a href="#skills">Habilidades</a> */}
              <a href="#resume">Resumen</a>
              <a href="#about">Contacto</a>
            </div>)
          }
        
      </HeaderPortfolio>
      <TitleHeader theme={theme}/>
      <ListSocialNetworks theme={theme}/>
      <ContactHeader theme={theme}/>
      <BackgroundHeader />
    </LandingHeader>
  );
};

export default NavBar;
