import React from 'react';
import PropTypes from 'prop-types';

const CreateMuppet = ({ name, performer, image, onChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Muppet Name</label>
      <input
        id="name"
        type="text"
        name="name"
        //value={name}
        onChange={onChange}
      />

      <label htmlFor="performer">Performer Name</label>
      <input
        id="performer"
        type="text"
        name="performer"
        //value={performer}
        onChange={onChange}
      />

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="text"
        name="image"
        //value={image}
        onChange={onChange}
      />

      <button data-testid="button">Create Muppet!</button>
    </form>
  </>
);

CreateMuppet.propTypes = {
  name: PropTypes.string.isRequired,
  performer: PropTypes.string,
  image: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateMuppet;
