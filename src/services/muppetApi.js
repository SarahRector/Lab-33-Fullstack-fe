/* eslint-disable max-len */
export const getMuppets = () => {
  return fetch('http://localhost:7891/api/v1/muppets')
    .then(res => res.json())
    .then(json => json.map(muppet => ({
      id: muppet.id,
      name: muppet.name,
      performer: muppet.performer,
      image: muppet.image
    })));
};

export const postMuppet = (name, performer, image) => {
  return fetch('http://localhost:7891/api/v1/muppets', {
    method: 'POST',
    headers: ({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ name, performer, image })
  })
    .then(res => res.json());

};
