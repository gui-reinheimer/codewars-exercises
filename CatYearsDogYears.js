var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
      
  if(humanYears===1){
   catYears = 15
   } else if(humanYears===2){
       catYears = 15+9
   } else{
       catYears = 24+ (humanYears-2)*4
   };
      

  if(humanYears===1){
    dogYears = 15    } else if(humanYears===2){
      dogYears = 15+9
   } else{
        dogYears = 24+ (humanYears-2)*5
   };
  
  return [humanYears, catYears, dogYears];
}