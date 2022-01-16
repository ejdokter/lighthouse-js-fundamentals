const numberOfVowels = function(data) {
  let vowels = ["a", "e", "i", "o", "u"]
  let numVowels = 0
  for (const letters of data) {
    if (vowels.includes(letters)) {
      numVowels++
    }
  }
  return numVowels
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));