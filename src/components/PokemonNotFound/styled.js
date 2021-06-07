import styled, { keyframes } from 'styled-components';

const initNotFound = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${initNotFound} 2s ease-in-out;
`;

export const Title = styled.h2`
  color: white;
`;
