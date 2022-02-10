import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue)
`;

export const Content = styled.div`
    max-width: 1220px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem; //top, right, bottom, left - dá espaço entre os elementos
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        // Filter tem várias funcionalidade úteis para efeito de botão
        //Não precisa buscar cores mais claras ou escuras para criar efeito
        &:hover {
            filter: brightness(0.9)
        }
    }
`;