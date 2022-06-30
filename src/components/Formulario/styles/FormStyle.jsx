import styled from "styled-components";

export const ContainerMainForm = styled.div`
    width: 85%;
    margin: 2rem auto;
    border-top: 1px solid var(--color-Principal);

    h1 {
        color: var(--color-Principal);
        text-align: center;
        margin: 1.5rem auto;
    }

`;


export const FormularioMain = styled.form`
    width: 38%;
    margin: 1rem auto;
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const InputFormulario = styled.input`
    border: none;
    background-color: #333333;
    padding: .4rem 1rem;
    color: #b1b1b1;
    border-radius: .8rem;

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const TextAreaFormulario = styled.textarea`
    border: none;
    background-color: #333333;
    border-radius: .8rem;
    padding: .4rem 1rem;
    color: #b1b1b1;
`;

export const HeaderFormulario = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    @media (max-width: 400px) {
        display: flex;
        width: 100%;
        gap: 1rem;
        flex-direction: column;
    }
`;

export const BtnEnviar = styled.button`
    padding: 1rem;
    text-align: center;
    border: none;
    font-weight: 800;
    letter-spacing: 1.2px;
    font-size: 1.1rem;
    color: #fff;
    background-color: var(--color-Principal);
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px var(--color-Principal);
    }
`;