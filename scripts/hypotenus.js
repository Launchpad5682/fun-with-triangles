const firstSide = document.getElementById("first-side");
const secondSide = document.getElementById("second-side");
const calculate = document.getElementById("calculate-hypotenuse");
const output = document.getElementById("output");

function calculateHypotenuse(event) {
  event.preventDefault();

  const a = Number(firstSide.value);
  const b = Number(secondSide.value);

  const c = Math.sqrt(a * a + b * b).toFixed(2);
  console.log(a);
  console.log(b);
  console.log(c);
  output.innerHTML = `Hypotenuse of a triangle with base ${a} & height ${b} is ${c} units`;

  firstSide.value = null;
  secondSide.value = null;
}

calculate.addEventListener("submit", calculateHypotenuse);