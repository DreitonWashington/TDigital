import styled from 'styled-components'

export const CardBody = styled.div`
    width: 15.5rem;
    height: 22.4rem;
    background: rgba(0, 116, 255, 1);
    display: block !important;

    div{
        
        width: 154px;
        height: 176px;
        font-weight: 700;
        font-size: 120px;
        color: rgba(26, 26, 26, 0.1);
        
    }
    h2{
        margin: -86px auto;
        margin-left: -50px;
        color: white;
        text-align: center;
    }
    p{
        font-size: 1rem;
        padding-top: 10rem;
        margin: 0px;
        color: white;
        text-align: left;
        padding: 10rem 0.5rem 0 0.5rem;
    }
    p~p{
        padding-top: 1rem;
        text-align: left;
        padding: 1rem 0.5rem 0 0.5rem;
    }
`