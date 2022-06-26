import React from "react";
import styled from "styled-components";

const LogoPrincipal = styled.div`
  letter-spacing: 1.1px;
  margin-left: 5.5rem;
`;

const IzquierdaLogo = styled.h3`
  color: #fff;
  font-family: "Kaushan Script", cursive;
  font-size: 1.4rem;
`;

const DerechaLogo = styled.span`
  color: var(--color-Principal);
  font-size: 1.8rem;
  font-family: "Kaushan Script", cursive;
`;

export const LogoNavBar = () => {
  return (
    <LogoPrincipal>
      <IzquierdaLogo>Gabriel <DerechaLogo>Copa</DerechaLogo>
      </IzquierdaLogo>
    </LogoPrincipal>
  );
};
