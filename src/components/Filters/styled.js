import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../../config/colors';

export const Container = styled.div`
  margin: 20px 20px 20px 0px;
  display: flex;
`;

export const FiltersType = styled.ul`
  list-style: none;
  display: flex;

  li {
    cursor: pointer;
    background: #212529;
    border: none;
    border-radius: 6px;
    margin: 3px 10px 0px 0px;
    width: 80px;
    height: 30px;

    a {
      text-decoration: none;
      color: #adb5bd;
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Type = styled(NavLink)`
  ${({ active, name }) =>
    active === name &&
    `
    background: linear-gradient(to right, ${colors[`${name}`]});
    font-size: 16px;
    border: none;
    border-radius: 6px;
    transition: transform 300ms ease-in-out;
    transform: scale(1.1);
    box-shadow: 2px 2px 20px 2px ${colors[`${name}`][0]};
  `}
`;
