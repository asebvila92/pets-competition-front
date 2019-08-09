
import axios from 'axios';

export const getPersons = () => {
  return axios.get("http://localhost:4881/api/people");
}

export const postPerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK Post"});
    }, 6000)
  })
}

export const deletePerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK Delete"});
    }, 6000)
  })
}


