const sumLargestNumbers = function(data) {
  let number1 = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] > number1) {
      number1 = data[i]
    }
  }
  data.splice(data.indexOf(number1), 1)

  let number2 = 0
  for (let k = 0; k < data.length; k++) {
    if (data[k] > number2) {
      number2 = data[k]
    }
  }
  return number1 + number2
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));