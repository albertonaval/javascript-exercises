
const repeatString = function (string, times) {
   if (times > 0) {
      return string.repeat(times);
   } else if (times < 0) {
      return "ERROR"; // Error the number cant be negative.
   } else {
      return "";
   }
}

// Entre parentesis argumentos de la funcion.
// Do not edit below this line
module.exports = repeatString;
