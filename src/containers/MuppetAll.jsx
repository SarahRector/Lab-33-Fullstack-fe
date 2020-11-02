import React, { useState, useEffect } from 'react';
import CreateMuppet from '../components/create/CreateMuppet';
import MuppetList from '../components/muppets/MuppetList';
import { getMuppets, postMuppet } from '../services/muppetApi';

const MuppetAll = () => {
  const [muppets, setMuppets] = useState([]);
  //const history = useHistory();

  useEffect(() => {
    getMuppets()
      .then(muppets => setMuppets(muppets));
  }, []);

  const handleChange = ({ target }) => {
    setMuppets(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMuppet(muppets)
      //.then (() => history.push('/'))
      .then(console.log);
  };


  return (
    <div>
      <CreateMuppet 
        name="Kermit"
        onChange={handleChange}
        onSubmit={handleSubmit}/>
      <MuppetList
        { ...muppets } />
    </div>
  );
};

export default MuppetAll;
