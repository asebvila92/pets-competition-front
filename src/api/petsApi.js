

export const getPetsOfPerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data: "OK GetPets"})
    })
  }, 6000)
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
