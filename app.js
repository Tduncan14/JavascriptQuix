

const startButton = document.getElementById('start-btn');


const questionContainerElement = document.getElementById('question-container');
const questionElement= document.querySelector('#question');
const answerButtonsElement= document.getElementById('answer-buttons');

let shuffledQuestions;
let currentQuestionIndex;



startButton.addEventListener('click',startGame);



function startGame(){
 console.log('startGame');
 startButton.classList.add('hide');
 shuffledQuestions = questions.sort(() => Math.random() - .5);

 console.log(shuffledQuestions);
 
 currentQuestionsIndex = 0;
 questionContainerElement.classList.remove('hide');

 setNextQuestion();

}


function setNextQuestion(){
   


    showQuestion(shuffledQuestions[currentQuestionsIndex])
 



}

function showQuestion (question){

    questionElement.innerText=question.question
}


function selectAnswer(){

}


const questions = [
    {
      question:' What is the first pokemon ?'  ,

      answers:[
          {text:'Rhydon',correct:true },
         {text:"Mew",correct:true},
         {text:"Arceus",correct:true},
         {text:"Pikachu",correct:true}

        ]
    }
]