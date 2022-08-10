import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "../styles/background.module.css";

const ContainerMainSocialNetwork = styled.div`
  position: absolute;
  right: 6.5rem;
  bottom: 2rem;
  z-index: 1;

  @media (max-width: 400px) {
    right: 1.7rem;
  }
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

  @media (max-width: 400px) {
    visibility: hidden;
  }
`;

const TextFollowMeWhite = styled.h3`
  color: #000;
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
    color: #000;
    background-color: #000;
  }

  @media (max-width: 400px) {
    visibility: hidden;
  }
`
const ListSocialNetworks = ({ theme }) => {
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
          {
            theme === "dark" ? (
              <TextFollowMe>Follow me</TextFollowMe>
            ) : (
              <TextFollowMeWhite>Follow me</TextFollowMeWhite>
            )
          }
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem"}}>
          <a href="https://github.com/gabrielcopa96" target="_blank">
            <FaGithub className={theme === "dark" ? styles.icons : styles.iconsWhite} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-copa-full-stack"
            target="_blank"
          >
            <FaLinkedinIn className={theme === "dark" ? styles.icons : styles.iconsWhite} />
          </a>
        </div>
      </ContainerListSocialNetwork>
    </ContainerMainSocialNetwork>
  );
};

export default ListSocialNetworks;
