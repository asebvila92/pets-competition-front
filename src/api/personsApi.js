
//install axios, import axios.

export const getPersons = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve({
          data: [
            {
              name: "Andres",
              surname: "Vila",
              id: 1,
            }
          ]
        }
      );
    }, 5000)
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


