// Tenemos una suma de elementos de valores infinitos.
// Cómo demonios hago esto?
// 1. Sumar elementos uno a uno y asignarlos a una variable
// 2. Hay alguna función en JS que me permita sumar elementos de un Array?
//   - Podemos usar la función X de JS. array.X(sdsd sadksdksa)

const sumAll = function (firstNumber, lastNumber) {
   let paramsAreNegative = firstNumber < 0 || lastNumber < 0
   let paramsAreNotNumbers = (typeof (firstNumber) != "number") || (typeof (lastNumber) != "number")

   if (paramsAreNegative || paramsAreNotNumbers) { return "ERROR"; }

   let sortedNumbers = [firstNumber, lastNumber].sort()

   let numbersRange = [];
   for (let i = sortedNumbers[0]; i <= sortedNumbers[1]; i++) {
      numbersRange.push(i)
   }

   return numbersRange.reduce((previousValue, currentValue) => previousValue + currentValue)
};

// Do not edit below this line
module.exports = sumAll;
