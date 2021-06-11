import styled from 'styled-components';
import { colors } from '../../../config/colors';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  margin-top: 50px;

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
  justify-content: space-between;
`;

export const Pokemon = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 150px;
  }
`;
