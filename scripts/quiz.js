const quizQuestions = [
  {
    question: "A Triangle can have",
    options: ["one right angle", "two right angle"],
  },
  {
    question: "If a triangle has angles 100, 40, 40.Is it an obtuse triangle?",
    options: ["yes", "no"],
  },
  {
    question: "If a triangle has angles 80, 70, 30. Is it an acute triangle?",
    options: ["yes", "no"],
  },
  {
    question: "If triangle has a sides of 3, 4 and 5. Then, it's a",
    options: [
      "Equilateral Triangle",
      "Scalene Triangle",
      "Right Angled Triangle",
    ],
  },
  {
    question:
      "If the perimeter of an equilateral triangle is 15cm. Then, the side is ?",
    options: ["5cm", "15cm", "30cm"],
  },
  {
    question: "Do equilateral triangles have all the sides and angles equal?",
    options: ["yes", "no"],
  },
  {
    question:
      "If a triangle has 2 sides with equal lengths and 75&#176; angle between them. What is the type of triangle?",
    options: ["Equilateral", "Isosceles", "Right Angle triangle"],
  },
  {
    question:
      "If a triangle has 2 sides with equal lengths and 60&#176; angle between them. What is the type of triangle?",
    options: ["Equilateral", "Isosceles", "Both"],
  },
  {
    question: "Scalene Triangle has no line of symmetry",
    options: ["yes", "no"],
  },
  {
    question:
      "If a triangle has 2 angles of 75&#176;. What is the measure of third angle in degree?",
    options: ["25", "30", "15"],
  },
];

const answers = [
  "option1",
  "option1",
  "option1",
  "option3",
  "option1",
  "option1",
  "option2",
  "option2",
  "option1",
  "option2",
];

/*
<div class="question-container">
          <label class="question"> 1. A triangle can have </label>
          <label for="radio1">
            <input
              required
              type="radio"
              id="radio1"
              name="question1"
              value="option1"
            />
            one right angle
          </label>
          <label for="radio2">
            <input
              required
              type="radio"
              id="radio2"
              name="question1"
              value="option2"
            />
            one right angle
          </label>
        </div> */

let formEle = document.getElementById("quiz-form");

const size = quizQuestions.length;

for (let i = 0; i < size; i++) {
  let questionNumber = "question" + (parseInt(i) + 1);

  let divQuestionContainer = document.createElement("div");
  divQuestionContainer.classList.add("question-container");

  let labelQuestion = document.createElement("label");
  labelQuestion.classList.add("question");

  let ques = quizQuestions[i].question;
  labelQuestion.innerHTML = ques;
  divQuestionContainer.appendChild(labelQuestion);

  let opt = quizQuestions[i].options;
  let optSize = opt.length;

  for (let i = 0; i < optSize; i++) {
    let optionLabel = document.createElement("label");

    let radio = "radio" + (parseInt(i) + 1);
    let value = "option" + (parseInt(i) + 1);
    let inputOption = document.createElement("input");
    // let labelTxt = document.createElement("h3");
    // labelTxt.innerHTML = opt[i];
    inputOption.setAttribute("name", questionNumber);
    inputOption.setAttribute("type", "radio");
    inputOption.setAttribute("value", value);
    inputOption.setAttribute("required", "");
    optionLabel.setAttribute("for", radio);

    // optionLabel.appendChild(labelTxt);
    optionLabel.innerText = opt[i];
    optionLabel.appendChild(inputOption);
    divQuestionContainer.appendChild(optionLabel);
  }

  formEle.appendChild(divQuestionContainer);
}

let divBtns = document.createElement("div");
divBtns.classList.add("btns");
let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit";
submitBtn.setAttribute("id", "btn-submit");
submitBtn.setAttribute("type", "submit");
let resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
resetBtn.setAttribute("id", "btn-reset");
resetBtn.setAttribute("type", "reset");

divBtns.appendChild(submitBtn);
divBtns.appendChild(resetBtn);

formEle.appendChild(divBtns);

const output = document.getElementById("para-output");
const questionContainer = document.querySelectorAll(".question-container");
// const submitBtn = document.getElementById("btn-submit");

formEle.addEventListener("submit", (e) => {
  let score = 0;
  e.preventDefault();
  const data = new FormData(formEle);
  
  let index = 0;
  for (let entry of data) {
    // console.log(entry);
    if (entry[1] == answers[index]) {
      questionContainer[index].style.backgroundColor = "#A7F3D0";
      score++;
    } else {
      questionContainer[index].style.backgroundColor = "#FECACA";
    }
    index++;
  }
  if (score >= 4) {
    output.innerText = `Congratulations, your score is ${score}`;
  } else {
    output.innerText = `Ohh no! Your score is ${score}`;
  }
});

resetBtn.addEventListener("click", () => {
  // reset type is used to reset the form
  questionContainer.forEach((div) => {
    div.style.backgroundColor = "inherit";
  });
  output.innerText = "";
});
