function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return "undefined"
  } else {
    return length * width
  }
}
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return "undefined"
  } else {
    return base * (height / 2)
  }
}
function calculateCircleArea(radius) {
  let radiusSquared = radius * radius
  if (radius < 0) {
    return "undefined"
  } else {
    return Math.PI * radiusSquared
  }
}

console.log(calculateTriangleArea(-1, 0));
console.log(calculateTriangleArea(10, -5));
console.log(calculateCircleArea(-1));
console.log(calculateCircleArea(10));