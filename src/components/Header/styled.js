import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '../../config/colors';

export const Container = styled.div`
  margin: 20px 20px 20px 0px;
  display: flex;
`;

export const Heading = styled.div`
  margin: 20px 20px 20px 0px;
`;

export const Title = styled.h1`
  a {
    text-decoration: none;
    color: whitesmoke;
  }
`;

export const Filters = styled.ul`
  list-style: none;
  color: whitesmoke;
  display: flex;

  li {
    text-align: center;
    cursor: pointer;
    background: grey;
    border: none;
    border-radius: 6px;
    margin: 3px 10px 0px 0px;
    width: 80px;
    height: 30px;

    a {
      text-decoration: none;
      color: black;
      display: block;
      width: 100%;
      height: 100%;
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
  `}
`;
