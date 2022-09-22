import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --text: rgba(89, 89, 89, 1);
        --title: rgba(26, 26, 26, 1);
        --btn-color: rgba(0, 116, 255, 1);

    }


    *{
        margin: 0;
        padding: 0;
    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
`
