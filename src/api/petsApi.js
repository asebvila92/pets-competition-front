import axios from 'axios';

export const getPetsOfPerson = personId => {
  return axios.get('http://localhost:4881/api/pets/' + personId);
};

export const postPet = pet => {
  return axios.post('http://localhost:4881/api/pets/', pet);
};

export const deletePet = pet => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'OK DeletePet' });
    });
  }, 6000);
};
