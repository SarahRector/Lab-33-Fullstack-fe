import React from 'react';
import PropTypes from 'prop-types';
import MuppetDetail from './MuppetDetail';
import { useState, useEffect } from 'react';
import { getMuppets } from '../../services/muppetApi';

const MuppetList = () => {
  const [muppets, setMuppets] = useState([]);
  //const history = useHistory();

  useEffect(() => {
    getMuppets()
      .then(muppets => setMuppets(muppets));
  }, []);
  const muppetElements = muppets.map(muppetDetail => (
    <li key={`${muppetDetail.performer}`}>
      <a key={muppetDetail.name} href={`/${muppetDetail.id}`}>
        <MuppetDetail {...muppetDetail} />
      </a>
    </li>
  ));

  return (
    <ul data-testid="muppetList">
      {muppetElements}
    </ul>
  );
};

MuppetList.propTypes = {
  muppetDetails: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    performer: PropTypes.string,
    image: PropTypes.string
  }))
};

export default MuppetList;
