function countBy(x, n) {
  let multiplicador = 1
  let resultado = []
   while(multiplicador <= n) {
     resultado.push(x * multiplicador) 
     multiplicador++
     
   } 
  return resultado
}