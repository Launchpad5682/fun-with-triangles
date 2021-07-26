const firstSide = document.getElementById("first-side");
const secondSide = document.getElementById("second-side");
const thirdSide = document.getElementById("third-side");
const calculateArea = document.getElementById("calculate-area");
const output = document.getElementById("output");

calculateArea.addEventListener("submit", computeArea);

console.log("I am logging everything");

function computeArea(event) {
  // preventing default behaviors
  event.preventDefault();

  const a = Number(firstSide.value);
  const b = Number(secondSide.value);
  const c = Number(thirdSide.value);

  // checking the sides for a + b < c, if it violates this then
  // it is not a triangle

  if (a + b > c && b + c > a && a + c > b) {
    //semi perimeter
    const s = (a + b + c) / 2;

    const result = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(3);
    console.log(result);
    output.innerHTML = `Area of Triangle using Heron's Formula: ${result}sq units`;
  } else {
    console.log("failure");
    output.innerHTML = `Invalid Triangle`;
  }
}
