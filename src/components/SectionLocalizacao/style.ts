import styled from "styled-components";

export const Container = styled.section`
    margin: 0 auto;
    max-width: 1353px;
    position: relative;
    h1{
        text-align: center;
        font-weight: 700;
        font-size: 2.4rem;
        color: var(--title)
    }
    p{  
        max-width: 72.3rem;
        font-size: 1.8rem;
        text-align: center;
        margin: 2rem auto;
        color: var(--text);
    }
    .cicle{
        position: absolute;
        top: -60px;
        left: -350px;
        width: 673px;
        height: 673px;
        background: rgba(0, 116, 255, 0.2);
        border-radius: 50%;
        z-index: -1;
    }
    div{
        margin: 0 auto;
        width: 900px;
        height: 440px;
        background: gray;
        
    }
    div:nth-last-child(1){
        margin: 3rem auto 0;
        width: 15rem;
        height: 2px;
        background: rgba(0, 0, 0, 1);

    }
    iframe{
        width: 56.3rem;
        height: 27.5rem;
    }
`