import styled, { keyframes } from 'styled-components';

const initPokemon = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Card = styled.div`
  width: 250px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #badbff 0,
    #c2daff 6.25%,
    #c9d8ff 12.5%,
    #d0d6ff 18.75%,
    #d8d4ff 25%,
    #dfd2fe 31.25%,
    #e6d0fa 37.5%,
    #eccff6 43.75%,
    #f2cdf2 50%,
    #f7cced 56.25%,
    #fccbe8 62.5%,
    #ffcae2 68.75%,
    #ffc9dd 75%,
    #ffc9d7 81.25%,
    #ffc9d1 87.5%,
    #ffc9cc 93.75%,
    #ffcac6 100%
  );
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 20px;
  transition: transform 300ms ease-in-out;
  opacity: 1;
  animation: ${initPokemon} 2s ease-in-out both;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
  }
`;
