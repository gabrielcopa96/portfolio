import React from "react";
import styled, { keyframes } from "styled-components";

const TitleIzquierdo = styled.h1`
  color: #fff;
  line-height: 90vh;
  margin: auto;
  left: -14.5rem;
  right: 5rem;
  text-align: center;
  font-size: 3.8rem;
  position: absolute;
  background: transparent;
  letter-spacing: 2.5px;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    right: 0;
    left: -12.7rem;
  }
`;


const TitleDerecho = styled.span`
  color: var(--color-Principal);
  font-family: "Kaushan Script", cursive;
  font-size: 4.8rem;
  letter-spacing: 3.2px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    font-family: "Kaushan Script", cursive;

    @media (max-width: 900px) {
    font-size: 2.5rem;
    top: -21.2rem;
  }
  }
`;

const TitleHeader = () => {
  return (
    <>
      <TitleIzquierdo>
        Full Stack
        <TitleDerecho>
          <span>Developer</span>
        </TitleDerecho>
      </TitleIzquierdo>
    </>
  );
};

export default TitleHeader;
