

const startButton = document.getElementById('start-btn');


const questionContainerElement = document.getElementById('question-container');


const shufflesQuestions, currentQuestionsIndex


startButton.addEventListener('click',startGame);



function startGame(){
 console.log('startGame');
 startButton.classList.add('hide');
 shufflesQuestions = questions.sort(()=>{
     Math.random()- .5
 })
 
 currentQuestionsIndex = 0;
 questionContainerElement.classList.remove('hide');

 setNextQuestion();

}


function setNextQuestion(){
 



}


function selectAnswer(){

}


const Question = [
    {
      question:'What is the first pokemon?'  ,

      answers:[
          {text:'Rhydon',correct:true },
         {text:"Mew",correct:true},
         {text:"Arceus",correct:true},
         {text:"Pikachu",correct:true}

        ]
    }
]