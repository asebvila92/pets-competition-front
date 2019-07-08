

export const getPetsOfPerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data: "OK GetPets"})
    })
  }, 6000)
}