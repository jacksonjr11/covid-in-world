import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;
        --gray: #363f5f;
        --black: #000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
        @media (max-width: 768px) {
            font-size: 81.25%;
        }
        @media (max-width: 480px) {
        font-size: 75%;
        }   
    }
    body { 
        background-color: var(--white);
        --webkit-font-smoothing: antialiased;
    }
    body,input,textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1,h2,h3,h4,h5,h6,strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity:0.6;
        cursor: not-allowed;
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
