import React, { useState } from 'react';
import CreateMuppet from '../components/create/CreateMuppet';
import { postMuppet } from '../services/muppetApi';

export const MuppetMaker = () => {
  const [name, setName] = useState('');
  const [performer, setPerformer] = useState('');
  const [image, setImage] = useState('');
  //const history = useHistory;

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'performer') setPerformer(target.value);
    if(target.name === 'image') setImage(target.value);
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMuppet(name, performer, image)
      //.then (() => history.push('/'));
      .then(console.log);


  };

  return (
    <div>
      <CreateMuppet 
        onChange={handleChange}
        onSubmit={handleSubmit}/>
    </div>
  );
};
