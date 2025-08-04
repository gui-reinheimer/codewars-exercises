function bmi(weight, height) {
 const imc = weight / (Math.pow(height, 2))
    if(imc <= 18.5) {
       return "Underweight" 
    } else if ( imc <= 25.0) {
       return "Normal" 
    } else if (imc <= 30.0) {
       return "Overweight" 
    } else {
       return "Obese"
    }
}