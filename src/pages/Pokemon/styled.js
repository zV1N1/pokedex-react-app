import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  color: #adb5bd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  img {
    width: 400px;
    height: 380px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Name = styled.h3`
  font-size: 60px;
  font-weight: 100;
  margin: 20px;
`;
