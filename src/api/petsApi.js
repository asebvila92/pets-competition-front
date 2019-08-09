

export const getPetsOfPerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({
        data:[
          {
            name: "lu",
            type: "cat",
          },
          {
            name: "re",
            type: "dog",
          }
        ]
      })
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
