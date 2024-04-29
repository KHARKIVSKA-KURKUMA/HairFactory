import { createGlobalStyle } from "styled-components";
import { lightBlack, lightGreenC } from "./utils/colors";

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Montserrat', sans-serif;
  color: ${lightBlack};
  margin: 0;
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button{
  border: transparent;
  border-radius: 24px;
  cursor: pointer;
}

.react-multi-carousel-dot-list {
  bottom: 0;
  .react-multi-carousel-dot  {
    button{
      background-color: #d6d6d6;
      border: none;
    }
  }
  .react-multi-carousel-dot--active {
  button{
  background-color: ${lightGreenC};
  border: none;
    }
  }
}

`;
