import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MuppetDetail from '../components/muppets/MuppetDetail';
import { getMuppetById } from '../services/muppetApi';

const MuppetDetailPage = ({ match }) => {
  const [muppet, setMuppet] = useState({ name: '', performer: '', image: '' });

  const muppetName = match.params.muppetName;

  useEffect(() => {
    getMuppetById(muppetName)
      .then(fetchedMuppet => setMuppet(fetchedMuppet));
  }, [muppetName]);

  return (
    <MuppetDetail {...muppet} />
  );
};

MuppetDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      muppetName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MuppetDetailPage;
