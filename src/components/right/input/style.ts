import styled from "styled-components";
import iconError from '../../../images/icon-error.svg'
export const Input = styled.input.attrs((props: {error:any}) => props)`
    padding: 1.6rem;
    padding-left:3.2rem;
    border-radius: 0.5rem;
    font-weight: 700;

    
    &:focus{
        outline: solid 1px hsl(248, 32%, 49%);
        border: solid 1px transparent;
    }

 

    

    ${props => props.error ? `
    border: solid 1px hsl(0, 100%, 74%);

    &::placeholder{
        color:hsl(0, 100%, 74%);
        background: url(${iconError});
        background-repeat: no-repeat;
        background-position-x:right;
        background-position-y:center;
        background-size: contain;
    }
    
    `
    : `
    border: solid 1px #d3d3d3;
    `}
`