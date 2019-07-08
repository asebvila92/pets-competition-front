
export const getPersons = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK Get"});
    }, 6000)
  })
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


