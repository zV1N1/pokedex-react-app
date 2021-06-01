import styled from 'styled-components';

export const Pokedex = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Container = styled.section``;

export const LoadMore = styled.button`
  color: black;
  font-size: 25px;
  width: 50px;
  height: 50px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #ffffa1 0,
    #f5ffa0 6.25%,
    #e4ffa0 12.5%,
    #d2ffa1 18.75%,
    #bdffa3 25%,
    #a7fda6 31.25%,
    #8cfaaa 37.5%,
    #6cf7af 43.75%,
    #3cf2b5 50%,
    #00edbc 56.25%,
    #00e8c6 62.5%,
    #00e4d0 68.75%,
    #00dfdc 75%,
    #00dbe9 81.25%,
    #00d7f5 87.5%,
    #00d3ff 93.75%,
    #00d0ff 100%
  );
  border: none;
  border-radius: 30px;
  align-self: center;
  cursor: pointer;
  transition: transform 300ms, background-image 600ms ease-in-out;

  &:hover {
    transform: scale(1.3);
    background-image: radial-gradient(
      circle at 50% -20.71%,
      #d1fff8 0,
      #befff6 10%,
      #a7fff4 20%,
      #8dfff3 30%,
      #6cfbf2 40%,
      #3cf2f2 50%,
      #00e8f3 60%,
      #00dff5 70%,
      #00d6f9 80%,
      #00cefd 90%,
      #00c6ff 100%
    );
  }
`;
