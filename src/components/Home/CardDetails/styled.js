import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  li {
    list-style: none;
    margin: 10px;
  }
`;

export const BarDetails = styled.div`
  width: 210px;
  height: 4px;
  background: white;
  margin-top: 5px;
  @media (max-width: 500px) {
    width: 160px;
  }

  @media (max-width: 360px) {
    width: 210px;
  }
`;

export const Bar = styled.div`
  height: inherit;
  background: grey;
  width: ${(props) => `${(props.size * 100) / 500}%`};
`;

export const DetailsName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
