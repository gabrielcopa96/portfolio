import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import { HeaderPortfolio, NavBarPortfolio } from "./styles/NavBarStyles.jsx";
import { BackgroundHeader } from "./elements/BackgroundHeader.jsx";
import { LogoNavBar } from "./elements/LogoNavBar.jsx";
import TitleHeader from "./elements/TitleHeader.jsx";
import ListSocialNetworks from "./elements/ListSocialNetworks.jsx";
import ContactHeader from "./elements/ContactHeader.jsx";
import styles from "./styles/background.module.css";

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

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const handleActive = (e) => {
    // e.preventDefault();
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

  return (
    <LandingHeader id="home">
      <HeaderPortfolio id="nav">
        <LogoNavBar />
        <NavBarPortfolio>
          {active !== "home" ? (
            <a
              href="#home"
              id="home"
              onClick={(e) => handleActive(e)}
              className={active === "home" ? styles.active : ""}
            >
              Inicio
            </a>
          ) : (
            <Active>Inicio</Active>
          )}
          {active !== "project" ? (
            <a href="#projects" id="project" onClick={(e) => handleActive(e)}>
              Proyectos
            </a>
          ) : (
            <Active>Proyectos</Active>
          )}
          {active !== "resumecv" ? (
            <a href="#resume" id="resumecv" onClick={(e) => handleActive(e)}>
              Resumen
            </a>
          ) : (
            <Active>Resumen</Active>
          )}
          {active !== "about" ? (
            <a href="#about" id="aboutus" onClick={(e) => handleActive(e)}>
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
        </NavBarPortfolio>
        {
            !open
            ? <></>
            : (<div className={styles.pruebaMenuMobile}>
              <a href="#home">Inicio</a>
              <a href="#project">Proyectos</a>
              <a href="#resume">Resumen</a>
              <a href="#about">Contacto</a>
            </div>)
          }
      </HeaderPortfolio>
      <TitleHeader />
      <ListSocialNetworks />
      <ContactHeader />
      <BackgroundHeader />
    </LandingHeader>
  );
};

export default NavBar;
