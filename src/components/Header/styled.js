import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
`;

export const Heading = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  color: whitesmoke;
`;

export const Filters = styled.ul`
  list-style: none;
  color: whitesmoke;
  display: flex;

  li {
    margin: 0px 8px 0 8px;
    background: grey;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 25px;
    text-align: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }
`;
