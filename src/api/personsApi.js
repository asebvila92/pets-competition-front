
export const getPersons = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK"});
    }, 6000)
  })
}
