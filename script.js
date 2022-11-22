"strict mode"

const quizPage = document.querySelector('.quiz-box')
const home = document.querySelector('.home');
const c = document.querySelector('#c');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js')
const optionList = document.querySelector('.option-list');
const queText = document.querySelector('#queText');
const options = document.querySelectorAll('.options');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
let footer = document.querySelector('.foot-quiz');
const result = document.querySelector('.result-page');
const next = document.getElementById('next');
let timeCount = document.getElementById('timer');
let timeLine = document.getElementById("time-line");
let topicName = document.getElementById('topicName');


let scoredMarks = document.getElementById('scored-marks');
let percentage = document.getElementById('percentage');
let correctAns = document.getElementById('correct-ans');
let resultName = document.getElementById('result-name');
let timeTaken = document.getElementById('time-taken');
let wrongAns = document.getElementById('wrong-ans');


const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const goHome = document.getElementById('go-to-home');
const startAgain = document.getElementById('start-again');
let timeOverText = document.querySelector(".timeOver-text");
let totalAttempt = document.getElementById('total-que-attempted');
let body = document.body;
let shuffledQuetions, indexOfQuestion;
let marks = 0;
indexOfQuestion = 0;
let num = 1;
let nameOfUser;
let count;
let timeValue = 60;

let arr = [];


function submitForm(event){ 
    event.preventDefault();
    nameOfUser = document.forms["welcome-form"]['name'].value;
    sessionStorage.setItem('name', nameOfUser);
    let x = String(nameOfUser);
    nameOfUser = x.trim(); 
    if (nameOfUser != ""){
            optionList.classList.remove('hide');
        }
        else{
            alert("Enter The Name To Proceed");
        }
    
    
    };

 
let queTimer =  function (timeVlaue){
    count = setInterval(Timer, 1000);
    function Timer(){
        if (timeValue < 10){
            timeCount.textContent = "0" + timeValue;
            timeValue--;
        }else if (timeValue > 0){
            timeCount.textContent = timeValue;
            timeValue--;    
        }

        if (timeValue < 0){
            clearInterval(count);
            timeCount.textContent = "00";
            timeOverText.innerHTML = " OOPS!! Your Time is Over";
            showResult();
            body.classList.add('wrong');
        }
        
    }
};




function startCQuiz(){
    queTimer(timeValue);
    topicName.innerHTML = "C";
    home.classList.add('hide');
    quizPage.classList.remove('hide');
    showCQuestion(cQueDB);
    ans1.addEventListener('click', function(){

        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cQueDB[shuffledQuetions].ans == "ans1"){
            answer1.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
            
        }else{
            answer1.classList.add('wrong');
            body.classList.add('wrong');
            if (cQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
            
        }
        footer.classList.remove('hide');
    });
    ans2.addEventListener('click', function(){

        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cQueDB[shuffledQuetions].ans == "ans2"){
            marks++;
            scoredMarks.innerHTML = marks;
            answer2.classList.add('correct');
            
            body.classList.add('correct');
        }else{
            answer2.classList.add('wrong');
            body.classList.add('wrong'); 
            if (cQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        
        }
        footer.classList.remove('hide');
    });
    ans3.addEventListener('click', function(){

        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cQueDB[shuffledQuetions].ans == "ans3"){
            
            answer3.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
            body.classList.add('correct');
            
        }else{
            answer3.classList.add('wrong');
            body.classList.add('wrong');
            if (cQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans4.addEventListener('click', function(){

        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cQueDB[shuffledQuetions].ans == "ans4"){
            answer4.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
            body.classList.add('correct');
            
        }else{
            answer4.classList.add('wrong');
            body.classList.add('wrong');
            if (cQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
  
    next.addEventListener('click', function(){
        if (indexOfQuestion < cQueDB.length-1){
            
            indexOfQuestion++
            num++;
            showCQuestion();
        }else{
            showResult();
        }
    });
    startAgain.addEventListener('click', function playAgain(){
        arr = [];
        indexOfQuestion = 0;
        marks = 0;
        scoredMarks.innerHTML = marks;
        indexOfQuestion = 0;
        num = 1;
        timeOverText.innerHTML = "";
        result.classList.add('hide');
        quizPage.classList.remove('hide');
        clearInterval(count);
        timeValue = 60;
        queTimer(timeValue);
        showCQuestion();
    });
    
};



function startHtmlQuiz(){
    queTimer(timeValue);
    topicName.innerHTML = "HTML";
    home.classList.add('hide');
    quizPage.classList.remove('hide');
    showHtmlQuestion(htmlQueDB);
    ans1.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (htmlQueDB[shuffledQuetions].ans == "ans1"){
            answer1.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer1.classList.add('wrong');
            body.classList.add('wrong');
            if (htmlQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans2.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (htmlQueDB[shuffledQuetions].ans == "ans2"){
            marks++;
            scoredMarks.innerHTML = marks;
            answer2.classList.add('correct');
            body.classList.add('correct');
        }else{
            answer2.classList.add('wrong');    
            body.classList.add('wrong');
            if (htmlQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans3.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (htmlQueDB[shuffledQuetions].ans == "ans3"){
            answer3.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer3.classList.add('wrong');
            body.classList.add('wrong');
            if (htmlQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans4.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (htmlQueDB[shuffledQuetions].ans == "ans4"){
            answer4.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer4.classList.add('wrong');
            body.classList.add('wrong');
            if (htmlQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (htmlQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
        next.addEventListener('click', function(){
            if (indexOfQuestion < htmlQueDB.length-1){
                indexOfQuestion++
                num++
                showHtmlQuestion();
            }else{
                showResult();
            }
        });
        startAgain.addEventListener('click', function playAgain(){
            arr = [];
            indexOfQuestion = 0;
            marks = 0;
            scoredMarks.innerHTML = marks;
            indexOfQuestion = 0;
            num = 1;
            timeOverText.innerHTML = "";
            result.classList.add('hide');
            quizPage.classList.remove('hide');
            clearInterval(count);
            timeValue = 60;
        
            queTimer(timeValue);
            showHtmlQuestion();
        });
};

function startJsQuiz(){
    queTimer(timeValue);
    topicName.innerHTML = "Java Script";
    home.classList.add('hide');
    quizPage.classList.remove('hide');
    showJsQuestion(jsQueDB);
    ans1.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (jsQueDB[shuffledQuetions].ans == "ans1"){
            answer1.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer1.classList.add('wrong');
            body.classList.add('wrong');
            if (jsQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans2.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (jsQueDB[shuffledQuetions].ans == "ans2"){
            marks++;
            scoredMarks.innerHTML = marks;
            answer2.classList.add('correct');
            body.classList.add('correct');
        }else{
            answer2.classList.add('wrong');
            body.classList.add('wrong'); 
            if (jsQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }   
        }
        footer.classList.remove('hide');
    });
    ans3.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (jsQueDB[shuffledQuetions].ans == "ans3"){
            answer3.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer3.classList.add('wrong');
            body.classList.add('wrong');
            if (jsQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans4.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (jsQueDB[shuffledQuetions].ans == "ans4"){
            answer4.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer4.classList.add('wrong');
            body.classList.add('wrong');
            if (jsQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (jsQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    next.addEventListener('click', function(){
        if (indexOfQuestion < jsQueDB.length-1){
            indexOfQuestion++
            num++
            showJsQuestion();
        }else{
            showResult();
        }
    });
    startAgain.addEventListener('click', function playAgain(){
        arr = [];
        indexOfQuestion = 0;
        marks = 0;
        scoredMarks.innerHTML = marks;
        indexOfQuestion = 0;
        num = 1;
        timeOverText.innerHTML = "";
        result.classList.add('hide');
        quizPage.classList.remove('hide');
        clearInterval(count);
        timeValue = 60;
        queTimer(timeValue);
        showJsQuestion();
    });
    
};

function startCssQuiz(){
    queTimer(timeValue);
    topicName.innerHTML = "Css";
    home.classList.add('hide');
    quizPage.classList.remove('hide');
    showCssQuestion(cssQueDB);
    ans1.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cssQueDB[shuffledQuetions].ans == "ans1"){
            answer1.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
        }else{
            answer1.classList.add('wrong');
            body.classList.add('wrong');
            if (cssQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans2.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cssQueDB[shuffledQuetions].ans == "ans2"){
            marks++;
            scoredMarks.innerHTML = marks;
            answer2.classList.add('correct');
            body.classList.add('correct');
        }else{
            answer2.classList.add('wrong');    
            body.classList.add('wrong');
            if (cssQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }   
        }
        footer.classList.remove('hide');
    });
    ans3.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cssQueDB[shuffledQuetions].ans == "ans3"){
            answer3.classList.add('correct');
            body.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
            
        }else{
            answer3.classList.add('wrong');
            body.classList.add('wrong');
            if (cssQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans4"){
                answer4.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    ans4.addEventListener('click', function(){
        answer1.classList.add('pointer-events');
        answer2.classList.add('pointer-events');
        answer3.classList.add('pointer-events');
        answer4.classList.add('pointer-events');
        if (cssQueDB[shuffledQuetions].ans == "ans4"){
            answer4.classList.add('correct');
            marks++;
            scoredMarks.innerHTML = marks;
            body.classList.add('correct');
        }else{
            answer4.classList.add('wrong');
            body.classList.add('wrong');
            if (cssQueDB[shuffledQuetions].ans == "ans2"){
                answer2.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans3"){
                answer3.classList.add('correct');
            }else if (cssQueDB[shuffledQuetions].ans == "ans1"){
                answer1.classList.add('correct');
            }
        }
        footer.classList.remove('hide');
    });
    next.addEventListener('click', function(){
        if (indexOfQuestion < cssQueDB.length-1){
            indexOfQuestion++
            num++
            
            showCssQuestion();
        }else{
            showResult();
        }
    });
    startAgain.addEventListener('click', function playAgain(){
        arr = [];
        
        indexOfQuestion = 0;
        marks = 0;
        scoredMarks.innerHTML = marks;
        indexOfQuestion = 0;
        num = 1;
        timeOverText.innerHTML = "";
        result.classList.add('hide');
        quizPage.classList.remove('hide');
        clearInterval(count);
        timeValue = 60;
    
        queTimer(timeValue);
        showCssQuestion();
    });
    
};




function showCQuestion(){
    
    
    answer1.classList.remove('pointer-events');
    answer2.classList.remove('pointer-events');
    answer3.classList.remove('pointer-events');
    answer4.classList.remove('pointer-events');
    body.classList.remove('wrong');
    body.classList.remove('correct');
    answer1.classList.remove('correct');
    answer1.classList.remove('wrong');
    answer2.classList.remove('correct');
    answer2.classList.remove('wrong');
    answer3.classList.remove('correct');
    answer3.classList.remove('wrong');
    answer4.classList.remove('correct');
    answer4.classList.remove('wrong');
    footer.classList.add('hide')



    shuffledQuetions = Math.floor(Math.random()*(cQueDB.length-(0+1)+1));
    
    if (!arr.includes(shuffledQuetions)){
        
        arr.push(shuffledQuetions);
    
        
    queText.innerHTML = "Q"+ num +"." + cQueDB[shuffledQuetions].question;

    ans1.innerHTML = cQueDB[shuffledQuetions].a;
    ans2.innerHTML = cQueDB[shuffledQuetions].b;
    ans3.innerHTML = cQueDB[shuffledQuetions].c;
    ans4.innerHTML = cQueDB[shuffledQuetions].d;
    
       
    }else{
        showCQuestion();
    }

    

    
};

function showHtmlQuestion(){
    answer1.classList.remove('pointer-events');
    answer2.classList.remove('pointer-events');
    answer3.classList.remove('pointer-events');
    answer4.classList.remove('pointer-events');
    body.classList.remove('wrong');
    body.classList.remove('correct');
    answer1.classList.remove('correct');
    answer1.classList.remove('wrong');
    answer2.classList.remove('correct');
    answer2.classList.remove('wrong');
    answer3.classList.remove('correct');
    answer3.classList.remove('wrong');
    answer4.classList.remove('correct');
    answer4.classList.remove('wrong');
    footer.classList.add('hide')
    
    shuffledQuetions = Math.floor(Math.random()*(htmlQueDB.length-(0+1)+1));

    if (!arr.includes(shuffledQuetions)){
        
        arr.push(shuffledQuetions);
       

   
    queText.innerHTML = "Q"+ num +"." + htmlQueDB[shuffledQuetions].question;

    
    ans1.innerText = htmlQueDB[shuffledQuetions].a;
    ans2.innerText = htmlQueDB[shuffledQuetions].b;
    ans3.innerText = htmlQueDB[shuffledQuetions].c;
    ans4.innerText = htmlQueDB[shuffledQuetions].d;
    
    }else{
        showHtmlQuestion();
    }

};

function showJsQuestion(){
    answer1.classList.remove('pointer-events');
    answer2.classList.remove('pointer-events');
    answer3.classList.remove('pointer-events');
    answer4.classList.remove('pointer-events');
    body.classList.remove('wrong');
    body.classList.remove('correct');
    answer1.classList.remove('correct');
    answer1.classList.remove('wrong');
    answer2.classList.remove('correct');
    answer2.classList.remove('wrong');
    answer3.classList.remove('correct');
    answer3.classList.remove('wrong');
    answer4.classList.remove('correct');
    answer4.classList.remove('wrong');
    footer.classList.add('hide')
    
    shuffledQuetions = Math.floor(Math.random()*(jsQueDB.length-(0+1)+1));
    
    queText.innerHTML = "Q"+ num +"." + jsQueDB[shuffledQuetions].question;

    if (!arr.includes(shuffledQuetions)){
        
        arr.push(shuffledQuetions);
        

    
    ans1.innerText = jsQueDB[shuffledQuetions].a;
    ans2.innerText = jsQueDB[shuffledQuetions].b;
    ans3.innerText = jsQueDB[shuffledQuetions].c;
    ans4.innerText = jsQueDB[shuffledQuetions].d;

    }else{
        showJsQuestion();
    }
    
};

function showCssQuestion(){
    answer1.classList.remove('pointer-events');
    answer2.classList.remove('pointer-events');
    answer3.classList.remove('pointer-events');
    answer4.classList.remove('pointer-events');
    body.classList.remove('wrong');
    body.classList.remove('correct');
    answer1.classList.remove('correct');
    answer1.classList.remove('wrong');
    answer2.classList.remove('correct');
    answer2.classList.remove('wrong');
    answer3.classList.remove('correct');
    answer3.classList.remove('wrong');
    answer4.classList.remove('correct');
    answer4.classList.remove('wrong');
    footer.classList.add('hide')
    
    shuffledQuetions = Math.floor(Math.random()*(cssQueDB.length-(0+1)+1));
    
    queText.innerHTML = "Q"+ num +"." + cssQueDB[shuffledQuetions].question;

    if (!arr.includes(shuffledQuetions)){
        
        arr.push(shuffledQuetions);
        


    ans1.innerText = cssQueDB[shuffledQuetions].a;
    ans2.innerText = cssQueDB[shuffledQuetions].b;
    ans3.innerText = cssQueDB[shuffledQuetions].c;
    ans4.innerText = cssQueDB[shuffledQuetions].d;

    }else{
        showCssQuestion();
    }
    
};

sessionStorage.getItem('name', nameOfUser);

function showResult(){

    clearInterval(count);
    
    if (marks >= 7){
        timeOverText.innerHTML = "Hey You were Awesome!!";
        resultName.innerHTML = nameOfUser;
        timeTaken.innerHTML = `${60 - timer.innerHTML } seconds`;
        totalAttempt.innerHTML = `${indexOfQuestion + 1}`;
        correctAns.innerHTML = `${marks}`;
        wrongAns.innerHTML = `${10 - marks}`;
        percentage.innerText = `${marks*10}%`;
        quizPage.classList.add('hide');
        result.classList.remove('hide');
        body.classList.remove('wrong');
        body.classList.remove('correct');
        body.classList.add('correct');
    }
    else{
        resultName.innerHTML = nameOfUser;
        timeTaken.innerHTML = `${60 - timer.innerHTML } seconds`;
        totalAttempt.innerHTML = `${indexOfQuestion+1}`;
        correctAns.innerHTML = `${marks}`;
        wrongAns.innerHTML = `${10 - marks}`;
        percentage.innerText = `${marks*10}%`;
        quizPage.classList.add('hide');
        result.classList.remove('hide');
        body.classList.remove('wrong');
        body.classList.remove('correct');
    }
    console.log(count);
    console.log(queTimer);

    
};

function myHome(){
    sessionStorage.clear();
    document.location.reload(true);
    
};