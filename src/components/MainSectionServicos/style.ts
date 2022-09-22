import styled from "styled-components";

export const Main = styled.main`
    max-width: 1353px;
    margin: 0 auto;

    h1{
        text-align: center;
        margin-top: 12rem;
        color: var(--title);
        font-size: 2.4rem;
    }
    p{
        max-width: 61rem;
        text-align: center;
        font-size: 1.8rem;
        color: var(--text);
        margin: 2rem auto;
    }
`
export const ContainerMain=styled.div`
    display: grid;
    width: 1003px;
    column-gap: 10px;
    margin: 0 auto;
    grid-template-columns: repeat(4,1fr);
`