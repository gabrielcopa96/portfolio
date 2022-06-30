import React from "react";
import styled from "styled-components";
import { FaLocationArrow, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

const ContainerContactHeader = styled.div`
  display: flex;
  position: absolute;
  gap: 2.2rem;
  bottom: 2.4rem;
  left: 5.8rem;
  color: #fff;
  justify-content: center;
  z-index: 0;


  @media (max-width: 400px) {
    left: 1.32rem;
  }
`;

const ContainerContactPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  z-index: 0;

  a {
    color: var(--color-letras);
    text-decoration: none;

    &:hover {
      color: var(--color-Principal);
    }
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (max-width: 400px) {
    display: none;
  }
  /* background-color: var(--color-Principal); */
`;

const ContactHeader = () => {
  return (
    <ContainerContactHeader>
      <ContainerContactPrincipal>
        <p style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <FaRegEnvelope style={{ color: "var(--color-Principal)" }} />
          <a href="mailto:gabrielcncopa@gmail.com? subject=subject text"  style={{ marginLeft: ".3rem" }}>
            gabrielcncopa@gmail.com
          </a>
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <FaWhatsapp style={{ color: "var(--color-Principal)" }} />
          <a href="#" style={{ marginLeft: ".3rem" }}>
            +54 (387) 6157 775
          </a>
        </p>
      </ContainerContactPrincipal>
      <Contenido>
        <h3>
          Hola, soy{" "}
          <span style={{ color: "var(--color-Principal)" }}>Gabriel Copa</span>,
          Full Stack Developer
        </h3>
        <h3>Orientado a Front End Developer</h3>
        <h3>
          <FaLocationArrow
            style={{
              width: "21px",
              height: "15px",
              color: "var(--color-Principal)",
              marginRight: ".4rem",
            }}
          />
          Soy de Salta, Argentina
        </h3>
      </Contenido>
    </ContainerContactHeader>
  );
};

export default ContactHeader;
