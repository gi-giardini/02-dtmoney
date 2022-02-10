import { createGlobalStyle } from "styled-components";

/**É um componente, então deve ser utilizado com letra maiúscula
 * além disso, será exportado e utilizado como uma tag nos códigos: <GlobalStyle />
 */
export const GlobalStyle = createGlobalStyle`
    
    // Cores para o sistema (pode pegar do template do figma)
    :root {
        --background: #f0f2f5;
        --red: #E52e40;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px por padrão (ideal para desktop)
    // 1 REM (medida) = font-size
    html {
        @media (max-width: 1080px){
            font-size: 93.75% //15px para dispositivos menores
        }

        @media (max-width: 720px){
            font-size: 97.5% //14px para dispositivos menores
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; //Deixa as fontes mais nítidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h3, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-alowed
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.9;

        &:hover{
            filter: brightness(0.9)
        }
    }
`