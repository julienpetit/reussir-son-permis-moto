import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ title, imageSrc }) => (
  <div className={cn('card-theme')}>
    <figure>
      <img src={imageSrc} alt={title} />
    </figure>
    <p>{title}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Card;
