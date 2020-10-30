/* eslint-disable max-len */
export const getMuppets = async() => {
  const res = await fetch('http://localhost:7891/api/v1/muppets');
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';
  
  return json.map(muppet => ({
    id: muppet.id,
    name: muppet.name,
    performer: muppet.performer,
    image: muppet.image
  }));
};

export const postMuppet = (name, performer, image) => {
  return fetch('http://localhost:7890/api/v1/muppets', {
    method: 'POST',
    headers: ({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ name, performer, image })
  })
    .then(res => res.json());

};
