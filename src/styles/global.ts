import {createGlobalStyle} from 'styled-components'
import bgDesktop from '../images/bg-intro-desktop.png'
export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    *{
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html{
        font-size: 62.5%;

    }

    body{
        font-size: 1.6rem;
    }

    .App{
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'left right';

        background: url(${bgDesktop}), hsl(0, 100%, 74%);
        background-repeat: no-repeat;
        background-size: cover;

        align-items: center;

        gap: 2rem;
        padding: 0 10rem;
    }
`