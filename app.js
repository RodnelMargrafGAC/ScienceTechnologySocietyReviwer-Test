const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions= [];
let correctAnswer = 0;
let attempt = 0;

// push the question into availableQuestions array
function setAvailableQuestions(){
    const totalQuestsion = quiz.length;
    for(let i=0; i<totalQuestsion; i++){
        availableQuestions.push(quiz[i])
    }
}
//set question number and question and options
function getNewQuestion(){
    //setQuestion Number
    questionNumber.innerHTML = "Question " + (questionCounter + 0) + " of " + quiz.length;

    // set question text
    // random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    // console.log(questionIndex);
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of `questIndex` from the  availabileQuestion Array,
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the question index` from the availableQuestion Array, so that the question does not repeat again
    availableQuestions.splice(index1,1);
    console.log(questionIndex)
    console.log(availableQuestions)
    
    //set options
    // get the length of options
    const optionLen = currentQuestion.option.length
    // push the options into availableQuestions Array
    
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    // create optons in HTML
    for(let i=0; i<optionLen; i++){
        
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from the availableOptions, so that option does not repeat
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.option[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }

questionCounter++

}
// get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id)
    // console.log(typeof id)
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswer++;

    }else{
        element.classList.add("incorrect");
        updateAnswerIndicator("incorrect");
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestsion = quiz.length;
    for(let i=0; i<totalQuestsion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

    }
}

function updateAnswerIndicator(markType){
answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered")
    }
}
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
        quizOver();
    }else{
        getNewQuestion();
    }
}

function quizOver(){
    // hide quiz quizBox
    quizBox.classList.add("hide");

    resultBox.classList.remove("hide")
    quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length; 
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer++
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
    const percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswer + " / " + quiz.length;
}

function ResetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempt = 0;
}
function TryAgain(){
    resultBox.classList.add("hide");

    quizBox.classList.remove("hide");
    ResetQuiz();
    StarQuiz();
}
function StarQuiz(){
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}
function Gohome(){

    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    ResetQuiz();
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}
		
window.onload = function(){
    //second we will call getNewQuestion(); function
    setAvailableQuestions();
    // first we will set all questions in availableQuestions Array
    getNewQuestion();
    // to create indicator of answer's
    answersIndicator();
}