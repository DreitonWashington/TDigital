import styled from "styled-components";

export const Container = styled.section`
    max-width: 1353px;
    margin: 0 auto;

    h1{
        text-align: center;
        margin-top: 12.6rem;
        font-size: 2.4rem;
    }
    p{
        color: var(--text);
        font-size: 1.8rem;
        text-align: center;
        font-style: normal;
        margin: 0 auto;
        max-width: 59rem;
        margin-top: 2rem;
    }
`
export const Content = styled.div`
    max-width: 1353px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
`