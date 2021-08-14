import styled from 'styled-components';

export const Pokedex = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 470px) {
    justify-content: center;
  }
`;

export const Container = styled.section`
  margin: 20px 20px 40px 20px;
`;
