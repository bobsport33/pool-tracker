import { createGlobalStyle } from "styled-components";
import { colors, media } from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    font-size: 62.5%;
    max-width: 100vw;
    overflow-x: hidden;
       font-family: 'Open Sans', sans-serif;
}

body {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/pool-4873047_1280.png");

    @media ${media.tablet} {
         background-image: url("/rotated-pool-4873047_1280.png");
    }
}

main {
    position: relative;
    width: 100%;
    
}

a {
    color: inherit;
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
label,
p {
    color: #f9f8ee;
}

h1 {
    font-size: 3.2rem;
}

h2 {
    font-size: 2.4rem;
}

p {
    font-size: 1.6rem;
}

label {
    font-size: 2rem;
}


`;

export default GlobalStyle;
