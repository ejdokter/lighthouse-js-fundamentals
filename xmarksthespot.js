const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function(moves) {
  let position = []
  let x = 0
  let y = 0
  for (let move of moves) {
   if (move === 'north') {
    y++
  } else if (move === 'east') {
    x++
  } else if (move === 'south') {
    y--
  } else if (move === 'west') {
    x--
  } 
  }
  position.push(x, y)
  return position
} 

console.log(finalPosition(moves))

for (const move of moves) {
  console.log(move)
}