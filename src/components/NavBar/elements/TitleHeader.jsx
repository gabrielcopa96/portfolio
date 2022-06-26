import React from "react";
import styled, { keyframes } from "styled-components";

const TitleIzquierdo = styled.h1`
  color: #fff;
  line-height: 90vh;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
  font-size: 3.8rem;
  position: absolute;
  background: transparent;
  letter-spacing: 2.5px;
`;

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
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
    top: 0;
    left: 0;
    font-family: "Kaushan Script", cursive;

    &:first-child {
      animation: ${glitch} 500ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
      transform: translate(-0.4em, -0.03em);
    }

    &:last-child {
      animation: ${glitch} 375ms infinite;
      clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
      transform: translate(0.04em, 0.03em);
      opacity: 0.75;
    }
  }
`;

const TitleHeader = () => {
  return (
    <>
      <TitleIzquierdo>
        Full Stack{" "}
        <TitleDerecho>
          <span aria-hidden="true">Developer</span>
          Developer
          <span aria-hidden="true"></span>
        </TitleDerecho>
      </TitleIzquierdo>
    </>
  );
};

export default TitleHeader;
