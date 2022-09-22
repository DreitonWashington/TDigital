import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    height: 842px;
    left: 17px;
    div:nth-child(1){
        display: flex;
        width: 863px;
        margin-top: -86px;
        margin-left: 11px;

        img{
            width: 100%;
        }
    }
    div:nth-child(2){
        h1{
            font-size: 3.2rem;
            padding-top: 7.7rem;
            max-width: 33.45rem;
            color: var(--title);
        }
        p{
            font-size: 1.8rem;
            color: var(--text);
            max-width: 537px;
            margin-top: 1.8rem;
        }
        button{
            margin-top: 2.3rem;
            font-size: 1.4rem;
            width: 15.3rem;
            height: 3.5rem;
            background: white;
            color: var(--btn-color);
            border: 1px solid rgba(0,0,0,1);

            &:hover{
                cursor: pointer;
            }
        }
    }
`