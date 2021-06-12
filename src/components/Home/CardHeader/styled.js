import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: center;
`;

export const Name = styled.h2`
  margin: 10px;
`;

export const Types = styled.ul`
  list-style: none;

  li {
    background-color: #fff5;
    padding: 4px;
    margin: 5px 0 5px 0;
    border: none;
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 60%;
    position: relative;
    transition: transform 300ms ease-in-out;
  }
`;
