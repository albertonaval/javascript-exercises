
const removeFromArray = function (array, ...items) {

   return array.filter(i => !items.includes(i));
}

// Do not edit below this line
module.exports = removeFromArray;

