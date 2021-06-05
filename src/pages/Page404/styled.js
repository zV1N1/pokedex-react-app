import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  width: 500px;
  height: 400px;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 120px;
    color: gray;
  }
  a {
    color: red;
  }
`;

export const Button = styled.button`
  color: black;
  width: 140px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 5px;
  margin: 0 0 10px 0;
  transition: opacity 300ms, transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;
