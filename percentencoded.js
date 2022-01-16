const urlEncode = function(text) {
  let noSpaces = ""
  text = text.trim()
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      noSpaces += "%20"
    } else {
      noSpaces += text[i]
    }
  }
  return noSpaces
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));