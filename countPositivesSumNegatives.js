function countPositivesSumNegatives(input) {
  let positivos = 0
  let negativos = 0
  if(input && input.length > 0){
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        positivos++       
      } else if (input[i] < 0) {
        negativos += input[i] 
      }
    }
  } else {
    return []
  }
 return [positivos, negativos]
}