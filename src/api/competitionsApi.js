export const getCompetitions = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve({data:"OK GetCompetitions"});
    }, 6000)
  })
}

