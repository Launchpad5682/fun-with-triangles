const firstAngle = document.getElementById("first-angle");
const secondAngle = document.getElementById("second-angle");
const thirdAngle = document.getElementById("third-angle");
const checkTriangle = document.getElementById("check-triangle");
const output = document.getElementById("output");

function checkTriangleUsingAngles(event) {
  console.log("i am in the function");
  event.preventDefault();

  const first = Number(firstAngle.value);
  const second = Number(secondAngle.value);
  const third = Number(thirdAngle.value);

  const sumOfAngles = first + second + third;

  console.log(sumOfAngles === 180);
  if (sumOfAngles === 180) {
    output.innerHTML = `Yes, given angles form a triangle`;
  } else {
    output.innerHTML = `Given angles doesn't form a triangle`;
  }

  firstAngle.value = null;
  secondAngle.value = null;
  thirdAngle.value = null;
}

checkTriangle.addEventListener("submit", checkTriangleUsingAngles);
