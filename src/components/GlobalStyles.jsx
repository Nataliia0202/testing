import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import '@fontsource/nunito-sans';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Nunito Sans',
        sans-serif;
        
        background-color: #F8F8F8;
       font-style: normal;
       font-weight: 400px;
       padding-bottom: 100px;
        
    }
    /* #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    } */
    
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
`;








