import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "../styles/background.module.css";

const ContainerMainSocialNetwork = styled.div`
  position: absolute;
  right: 6.5rem;
  bottom: 2rem;
  z-index: 1;
`;

const ContainerListSocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
`;

const TextFollowMe = styled.h3`
  color: var(--color-letras);
  writing-mode: vertical-lr;
  transform: rotate(360deg);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 0.1rem;
    bottom: -5.3rem;
    right: 1rem;
    height: 4.2rem;
    color: var(--color-letras);
    background-color: var(--color-letras);
  }
`;
const ListSocialNetworks = () => {
  return (
    <ContainerMainSocialNetwork>
      <ContainerListSocialNetwork>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.7rem",
          }}
        >
          <TextFollowMe>Follow me</TextFollowMe>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem"}}>
          <a href="https://github.com/gabrielcopa96" target="_blank">
            <FaGithub className={styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-copa-full-stack"
            target="_blank"
          >
            <FaLinkedinIn className={styles.icons} />
          </a>
        </div>
      </ContainerListSocialNetwork>
    </ContainerMainSocialNetwork>
  );
};

export default ListSocialNetworks;
