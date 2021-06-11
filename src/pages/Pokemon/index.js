import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Evolution from '../../components/Pokemon/Evolution';
// import Description from '../../components/Pokemon/Description';
import Details from '../../components/Pokemon/Details';

import { Container, Name, Main, Head } from './styled';

import axios from '../../services/axios';

export default function Pokemon() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [evolution, setEvolution] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`pokemon-species/${id}`);
        setName(data.name);
        const { url } = data.evolution_chain;
        const initial = new URL(url).pathname;
        const evUrl = initial.slice(8);
        setEvolution(evUrl);
      } catch (e) {
        history.push('/');
      }
    }

    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Name>{name}</Name>
      <Main>
        <Details id={id} />
        <Head>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={name}
          />
        </Head>
        {/* <Description description={desc} /> */}
      </Main>
      {evolution && <Evolution id={id} url={evolution} />}
    </Container>
  );
}
