import styled from 'styled-components';

export const Container = styled.div``;

export const Search = styled.form`
  border: solid 2px black;
  border-radius: 10px;
  display: flex;
  input {
    width: 200px;
    height: 30px;
    padding: 10px 0 10px 0;
    background: none;
    border: none;
    color: whitesmoke;
    font-size: 16px;
  }
  button {
    width: 50px;
    height: 30px;
    border: none;
    background-color: transparent;
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;
