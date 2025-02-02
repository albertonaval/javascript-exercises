// Tengo que crear un conversor de medidas de tempertura con dos variables:
  // Farenheit = C * 9/5 + 32;
  // Celsius = (F - 32º)  * 5/9;
  // Para el redonde es mejor aplicar Math.round ya que toFixed() devuelve un string y no queremos un string.
  // Math.round(temperatura que quiero retornar * 10) / 10;
// El argumento que le paso a la function es la temperatura que introduzco.

const ftoc = function (fahrenheit) {
  const celsiusToFahrenheit = (fahrenheit - 32) * 5/9
  return Math.round(celsiusToFahrenheit * 10) / 10;
};

const ctof = function(celsius) {
  const fahrenheitToCelsius = celsius * 9 / 5 + 32
  return Math.round(fahrenheitToCelsius * 10) /10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
