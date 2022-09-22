import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1353px;
`

export const Header = styled.header`
    display: grid;
    grid-gap: 148px;
    grid-template-columns: 1fr 1fr;
    div{
        height: 150px;
        img{
            margin-top: 25px;
            margin-bottom: 25px;
            width: 100px;
            height: 100px
        }
    }
    nav{
        display: block;
        margin: auto 0;
        ul{
            list-style-type: none;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            li{
                color: rgba(0, 0, 0, 1);
                font-weight: 600;
                font-size: 0.8rem;
                line-height: 0;
                width: 90px;
                height: 17px;
                text-align: center;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`
