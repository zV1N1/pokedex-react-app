import React from 'react';
import PropTypes from 'prop-types';
import { Details, BarDetails, Bar, DetailsName } from './styled';

export default function CardDetails({ attack, defense, speed, hp }) {
  return (
    <Details>
      <ol>
        <li>
          <DetailsName>
            <p>Attack: </p>
            <p>{attack}/500</p>
          </DetailsName>
          <BarDetails>
            <Bar size={attack} />
          </BarDetails>
        </li>
        <li>
          <DetailsName>
            <p>Defense: </p>
            <p>{defense}/500</p>
          </DetailsName>
          <BarDetails>
            <Bar size={defense} />
          </BarDetails>
        </li>
        <li>
          <DetailsName>
            <p>Speed: </p>
            <p>{speed}/500</p>
          </DetailsName>
          <BarDetails>
            <Bar size={speed} />
          </BarDetails>
        </li>
        <li>
          <DetailsName>
            <p>Hp: </p>
            <p>{hp}/500</p>
          </DetailsName>
          <BarDetails>
            <Bar size={hp} />
          </BarDetails>
        </li>
      </ol>
    </Details>
  );
}

CardDetails.propTypes = {
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
};
