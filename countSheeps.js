function countSheeps(sheep) {
  let contaOvelhas = sheep.reduce((acc, ovelha) => {
    if(ovelha === true){
    return ++acc
    } else {
      return acc
    }
  }, 0)
  return contaOvelhas
}