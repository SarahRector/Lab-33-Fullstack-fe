import React from 'react';
import PropTypes from 'prop-types';
import MuppetDetail from './MuppetDetail';

const MuppetList = ({ muppetDetails }) => {
  const muppetElements = muppetDetails.map(muppetDetail => (
    <li key={`${muppetDetail.name}-${muppetDetail.performer}`}>
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
  })).isRequired
};

export default MuppetList;
