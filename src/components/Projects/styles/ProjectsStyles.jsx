import styled from "styled-components";

export const CardPrincipal = styled.div`
  background-color: #ffffff11;
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 40% 60%;
  box-shadow: 0px 0px 5px 1px #ffffff52;

  img {
    width: 100%;
    padding: 2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      transform: grayscale(90%);
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ContenidoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.2rem;

  h2 {
    color: #fff;
    width: 95%;
    padding-bottom: 0.4rem;
    letter-spacing: 1.9px;
    border-bottom: 2px solid var(--color-Principal);
  }

  h4 {
    color: var(--color-Principal);
    margin-top: .6rem;
  }

  p {
    color: #d5d5d5;
    margin-top: 1rem;
    width: 95%;
    text-align: justify;
    font-size: 1.1rem;

    @media (max-width: 400px) {
      width: 100%;
      font-size: .98rem;
    }
  }
`;