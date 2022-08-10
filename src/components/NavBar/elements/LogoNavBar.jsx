import styled from "styled-components";

const LogoPrincipal = styled.div`
  letter-spacing: 1.1px;
  margin-left: 5.5rem;

  @media (max-width: 400px) {
    margin-left: 1rem;
  }
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

export const LogoNavBar = ({ theme }) => {
  return (
    <LogoPrincipal>
      <IzquierdaLogo style={theme === "dark" ? {} : {color: "#000"}}>Gabriel <DerechaLogo>Copa</DerechaLogo>
      </IzquierdaLogo>
    </LogoPrincipal>
  );
};
