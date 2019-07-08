
export const getPersons = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK"});
    }, 6000)
  })
}

export const postPerson = (person) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:person});
    }, 6000)
  })
}
