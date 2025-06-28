function printerError(s) {
  let erro = 0
    for(let i = 0; i < s.length; i++){ 
        if(s[i] < 'a' || s[i] > 'm'){
    erro++
    }
  }
  return `${erro}/${s.length}`
}