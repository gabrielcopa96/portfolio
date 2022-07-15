import React from "react";
import { CardPrincipal, ContenidoCard } from "./styles/ProjectsStyles.jsx";
import styled from "styled-components";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiPassport,
  SiGithub,
} from "react-icons/si";
import { IoEye } from "react-icons/io5";

const ContainerTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
`;

const ContainerItemTech = styled.div`
  color: #b8b8b8;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--color-Principal);
  }
`;

const ContainerButtons = styled.div`
  width: 70%;
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  align-items: center;
`;

const ButtonGitHub = styled.a`
  padding: 0.4rem;
  width: 10rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  background-color: transparent;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid var(--color-Principal);
  color: var(--color-Principal);
  transition: 0.1s;

  &:hover {
    background-color: var(--color-Principal);
    color: #020202;
  }
`;

const ButtonDeploy = styled.a`
  padding: 0.4rem;
  width: 10rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  background-color: var(--color-Principal);
  border: 1px solid var(--color-Principal);
  text-decoration: none;
  color: #020202;
  font-weight: 700;
  transition: 0.1s;

  &:hover {
    box-shadow: 0px 0px 8px var(--color-Principal);
  }
`;


const ImagenProject = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    height: 60%;
  }

  @media (max-width: 900px) {
    height: 45%;
  }

  @media (max-width: 400px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const CardsProjects = (props) => {
  const { image, title, description, github, deploy, theme } = props;

  const styleIconTech = {
    width: "29px",
    height: "29px",
  };
  return (
    <CardPrincipal style={theme === "dark" ? {} : {backgroundColor: "#353535"}}>
      <ImagenProject>
        <img src={image} />
      </ImagenProject>
      <ContenidoCard>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <h4>Tecnologias utilizadas en el proyecto:</h4>
        <ContainerTech>
          <ContainerItemTech>
            <FaReact style={styleIconTech} />
            <p>React</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiRedux style={styleIconTech} />
            <p>Redux</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <FaNodeJs style={styleIconTech} />
            <p>NodeJS</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiJavascript style={styleIconTech} />
            <p>JavaScript</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiExpress style={styleIconTech} />
            <p>ExpressJS</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiMongodb style={styleIconTech} />
            <p>MongoDB</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiPassport style={styleIconTech} />
            <p>Passport</p>
          </ContainerItemTech>
          <ContainerItemTech>
            <SiCss3 style={styleIconTech} />
            <p>CSS3</p>
          </ContainerItemTech>
        </ContainerTech>
        <ContainerButtons>
          <ButtonGitHub href={github} target="_blank">
            <SiGithub style={{ width: "20px", height: "20px" }} />
            GitHub
          </ButtonGitHub>
          <ButtonDeploy href={deploy} target="_blank">
            <IoEye style={{ width: "20px", height: "20px" }} />
            Ver demo
          </ButtonDeploy>
        </ContainerButtons>
      </ContenidoCard>
    </CardPrincipal>
  );
};

export default CardsProjects;
