import axios from 'axios';

export const getPetsOfPerson = (person) => {
  return axios.get("http://localhost:4881/api/pets");
}

export const postPet = (pet) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data: "OK PostPet"})
    })
  }, 6000)
}

export const deletePet = (pet) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data: "OK DeletePet"})
    })
  }, 6000)
}
