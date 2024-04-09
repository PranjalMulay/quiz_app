const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "HyperLink and Text Markup Language",
            "HyperLink and Text Language"
        ],
        correct: 0,
    },
    {
        question: "What CSS property is used to control the spacing between elemnets?",
        options: ["margin", "pading", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is the Javascript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "SelectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "In React.js, which is used to perform side effects in a function component?",
        opion: ["useEffect", "useState", "UseContext", "useReducer"],
        correct: 0,
    },
];

//Step 2 = >

const quiz = document.querySelector('#quiz');

const answerElm = document.querySelectorAll(".answer");

//const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(" #question_, #option_1, #option_2, #option_3, #option_4");

const questionElm = document.querySelector("#question_");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");


//console.log(questionElm);
const submitBtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;

//Step 3 =>

const loadQuiz = () => {
    //console.log(quizData[currentQuiz]);

    const { question, options } = quizData[currentQuiz];


    //console.log(options);

    questionElm.innerHTML = question;
    console.log(question);
    //questionElm.innerText = `${currentQuiz + 1}:${question}`;
    // options.forEach((currOption, index) => (option_1.innerHTML = currOption));


    options.forEach(
        (currOption, index) => (window[`option_${index + 1}`].innerText = currOption));
};

loadQuiz();


//Step 4 =>

const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((currOption, index) => {
        if (currOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
    // let answerElm = Array.from(answerElm);
    // answerElm.findIndex((currElm, index) => currElm.checked);

};


const deselected = () => {
    return answerElm.forEach((currElm) => currElm.checked = false);
}



submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);


    if (selectedOptionIndex == quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselected();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class = "result">
            <h2> Your Score : ${score}/${quizData.length} Correct Answer</h2>
            <button class = "reload-button" onclick = "location.reload()">Play Again</button>
        <div>
        `;
    }
})

console.log(globalThis.document);



