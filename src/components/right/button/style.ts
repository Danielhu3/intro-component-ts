import styled from "styled-components";
export const Button = styled.button`
    padding: 1.6rem;
    border: none;
    background-color: hsl(154, 59%, 51%);
    color: white;
    box-shadow: 0 2px 2px 2px rgb(55 204 140 / 20%);
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover{
        background-color: hsla(154, 59%, 51%,0.8);
    }
`