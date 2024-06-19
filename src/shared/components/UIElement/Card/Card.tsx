import React from 'react';
import { CardProps } from './card.interface.ts';

import './Card.css';

const Card = (props: CardProps) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
