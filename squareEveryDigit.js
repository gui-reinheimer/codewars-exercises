function squareDigits(num){
  const resultado = []
  const str = num.toString()
  const array = str.split('')
  for(let i = 0; i < array.length; i++) {
   const quadrado = Math.pow(Number(array[i]), 2)
    resultado.push(quadrado)
  }
 return Number(resultado.join(''))
}