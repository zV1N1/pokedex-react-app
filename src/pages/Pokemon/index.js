import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Details from '../../components/Pokemon/Details';
import Evolution from '../../components/Pokemon/Evolution';

import { Container, Name, Main, Habitat } from './styled';

import axios from '../../services/axios';
import Footer from '../../components/Pokemon/Footer';

export default function Pokemon() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [abilities, setAbilities] = useState([]);
  const [type, setType] = useState([]);
  const [habitat, setHabitat] = useState('');
  const [evolution, setEvolution] = useState('');

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`pokemon-species/${id}`);
        setHabitat(data.habitat.name);
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

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`pokemon/${id}`);
        setName(data.name);
        setHeight(data.height);
        setWeight(data.weight);
        setAbilities(data.abilities);
        setType(data.types);
      } catch (e) {
        history.push('/');
      }
    }

    getData();
  }, []);
  return (
    <Container>
      <Name>{name}</Name>
      {type[0] && <Habitat name={type[0].type.name}>{habitat} Pokemon</Habitat>}
      <Main>
        <Details
          id={id}
          height={height}
          weight={weight}
          abilities={abilities}
          type={type}
        />
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={name}
        />
      </Main>
      {evolution && <Evolution type={type} url={evolution} />}
      <Footer />
    </Container>
  );
}
