import styled from "styled-components";

export const HeaderPortfolio = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: fixed;
  padding-top: 1rem;
  z-index: 1;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const NavBarPortfolio = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 5.5rem;
  color: var(--color-letras);
  a {
    color: var(--color-letras);
    text-decoration: none;
    cursor: pointer;
    
    &:before {
      content: "<";
      padding-right: .2rem;
      opacity: 0;
    }

    &:after {
      content: "/>";
      padding-left: .2rem;
      opacity: 0
    }

    &:hover:before,
    &:hover:after {
      opacity: 1;
    }

    &:hover {
      color: var(--color-Principal);
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    /* padding-top: 8rem; */
    a { 
      display: none;
      /* visibility: hidden; */
    }
  }

  @media (max-width: 400px) {
    display: flex;
    margin-right: 2rem;
    justify-content: space-between;
  }

`;