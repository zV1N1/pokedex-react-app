import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../config/colors';

export const Container = styled.div`
  margin-top: 50px;
  text-align: center;
  p {
    color: #f8f9fa;
    margin: 3px;
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  width: 300px;
  margin: auto;

  ${({ name }) =>
    name &&
    `
    color: #f8f9fa;
    font-weight: 600;
    padding: 5px 20px 5px 20px;
    background: linear-gradient(to right, ${colors[`${name}`]});
    font-size: 20px;
    border: none;
    border-radius: 5px;
  `}
`;

export const Chain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h2`
  font-size: 20px;
  color: white;
  ${({ name }) =>
    colors[`${name}`]
      ? `
    padding: 3px 6px 3px 6px;
    background: linear-gradient(to right, ${colors[`${name}`]});
    border: none;
    border-radius: 3px;
  `
      : `
    background: linear-gradient(to right, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
    box-shadow: 2px 2px 20px 7px #8989ba;
  `}
`;

export const Pokemon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Species = styled(Link)`
  text-align: center;
  margin: 20px;
  text-decoration: none;

  img {
    width: 150px;
    height: 120px;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

export const Level = styled.div`
  svg {
    width: 80px;
    height: 40px;
  }
`;
