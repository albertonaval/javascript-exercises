// Numeros divididos entre 4 or 400 = True.
// Numeros divididos entre 4 y 100 y 400 = True
// Lo demas falso.




const leapYears = function (year) {
   let divisibleBy4 = (year % 4) === 0;
   let divisibleBy400 = (year % 400) === 0;
   let divisibleBy100 = (year % 100) === 0;

   if (divisibleBy4 && divisibleBy100 && divisibleBy400) { return true }
   else if(divisibleBy4 && divisibleBy100) {return false}
   else {return false}

}






// Do not edit below this line
module.exports = leapYears;
