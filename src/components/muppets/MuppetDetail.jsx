import React from 'react';
import PropTypes from 'prop-types';

const MuppetDetail = ({ name, performer, image }) => (
  <div data-testid="details">
    <h1>{name}</h1>
    <p>Performed By: {performer}</p>
    <img src={image} alt={name} />
  </div>
);

MuppetDetail.propTypes = {
  name: PropTypes.string,
  performer: PropTypes.string,
  image: PropTypes.string
};

export default MuppetDetail;
