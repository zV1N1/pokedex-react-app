import React from 'react';

import { Container } from './styled';

export default function Description({ description }) {
  return (
    <Container>
      <h2>Description</h2>
      <p>{description}</p>
    </Container>
  );
}
