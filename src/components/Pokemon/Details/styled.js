import styled, { keyframes } from 'styled-components';
import { colors } from '../../../config/colors';

const initDetails = keyframes`
  from {
    transform: scale(0.4);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin: 20px;
  color: #adb5bd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokeDetails = styled.table`
  margin: 100px 0 0 0;
  font-size: 25px;
  border-spacing: 20px;
  color: #adb5bd;
  animation: ${initDetails} 2s ease-in-out;

  td:first-child {
    font-weight: 400;
    margin: 20px;
    color: #ced4da;
    text-align: right;
  }

  @media (max-width: 500px) {
    margin: 30px 5px 0 5px;
    font-size: 18px;
  }
`;

export const Abil = styled.td`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  ${({ name }) =>
    name &&
    `
    color: #f8f9fa;
    font-weight: 600;
    padding: 5px 20px 5px 20px;
    background: linear-gradient(to right, ${colors[`${name}`]});
    font-size: 16px;
    border: none;
    border-radius: 3px;
  `}
`;

export const Type = styled.td`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  ${({ name }) =>
    colors[`${name}`]
      ? `
    color: #f8f9fa;
    font-weight: 500;
    padding: 7px 25px 7px 25px;
    background: linear-gradient(to right, ${colors[`${name}`]});
    font-size: 20px;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 20px 7px ${colors[`${name}`][0]};

  `
      : `
    color: white;
    font-weight: 300;
    padding: 7px 25px 7px 25px;
    background: linear-gradient(to right, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
    font-size: 16px;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 20px 7px #8989ba;
  `}
`;
