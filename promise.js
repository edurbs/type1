function doPromise(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('ok')
      // reject('erro!')
    }, 1000);
  })
}

const promise = doPromise()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("finalizou"))
