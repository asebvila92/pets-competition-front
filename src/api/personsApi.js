import axios from 'axios';

export const getPersons = () => {
  return axios.get('http://localhost:4881/api/people');
};

export const postPerson = person => {
  return axios.post('http://localhost:4881/api/people', person);
};

export const deletePerson = person => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'OK Delete' });
    }, 6000);
  });
};
