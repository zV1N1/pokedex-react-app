import styled from 'styled-components';
import { colors } from '../../config/colors';

export const Container = styled.div`
  margin: 20px;
  color: #adb5bd;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 400px;
    height: 380px;
  }
`;
export const Name = styled.h3`
  font-size: 60px;
  font-weight: 100;
  margin: 20px 0 0 0;
`;

export const Habitat = styled.h4`
  font-size: 20px;
  color: white;
  font-weight: 300;
  ${({ name }) =>
    colors[`${name}`]
      ? `
    color: #f8f9fa;
    font-weight: 500;
    padding: 5px 15px 5px 15px;
    background: linear-gradient(to right, ${colors[`${name}`]});
    font-size: 20px;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 20px 7px ${colors[`${name}`][0]};
  `
      : `
    background: linear-gradient(to right, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
    box-shadow: 2px 2px 20px 7px #8989ba;
  `}
`;
