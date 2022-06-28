import styled from 'styled-components';


export const ContainerResume = styled.div`
    width: 85%;
    margin: 0 auto;

    h1 {
        color: var(--color-Principal);
        text-align: center;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const CardResume = styled.div`
    width: 60%;
    margin: 2.8rem auto;
    box-shadow: 0px 0px 10px #ffffff37;
    display: flex;
    justify-content: space-between;
    border-radius: .25rem;
    padding: 1rem;
    gap: 2rem;

    @media (max-width: 900px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
    }
`;