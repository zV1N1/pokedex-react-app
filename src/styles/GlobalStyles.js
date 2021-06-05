import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #485461;
    background-image: linear-gradient(to left, #485461 0%, #28313b 74%);
    margin: 20px 40px 40px 40px;
  }
`;
