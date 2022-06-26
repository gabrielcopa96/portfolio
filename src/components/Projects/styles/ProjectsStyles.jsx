import styled from "styled-components";

export const CardPrincipal = styled.div`
    height: 420px;
    background-color: #ffffff11;
    border-radius:.4rem;
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
`;


export const ContenidoCard = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2.2rem;

    h2 {
        color: #fff;
        width: 95%;
        padding-bottom: .4rem;
        letter-spacing: 1.9px;
        border-bottom: 2px solid var(--color-Principal);
    }
`;