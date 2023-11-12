function sleep(ms){
  return new Promise((resolve) => {
    (setTimeout(() => {
      console.log('sleep')
      resolve()
    }, ms))
  })
}

async function doSomething (){
  await sleep(2000)
  console.log('terminei')
}

doSomething()