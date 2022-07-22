const quizeQue=[
    {
        question:"Q1:How many continents are there?",
        a:"Four",
        b:"Nine",
        c:"Seven",
        d:"Eight",
        ans:"ans4"
    },
    {
        question:"Q2: What is the Full Form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"Just Script",
        d:"Jorden Shoes",
        ans:"ans1"
    },
    {
        question:"Q3:What is the capital of India?",
        a:"Chandigarh",
        b:"Bhopal",
        c:"Chennai",
        d:"Delhi",
        ans:"ans4"
    },
    {
        question:"Q4: What is the Full Form of HTML?",
        a:"Hello To My Land",
        b:"HyperText Makeup Language",
        c:"HyperText Markup Language",
        d:"Hey Text Markup Language",
        ans:"ans3"
    },
    {
        question:"Q5:What is the Full Form of HTTP?",
        a:"HyperText Transfer Product",
        b:"HyperText Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hyper Text Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q6:who is the founder of 'python'?",
        a:"Bill Gates",
        b:"Guido Van Rossum",
        c:"Jeff Bezoz",
        d:"Ratan Tata",
        ans:"ans2"
    },
    {
        question:"Q7:python is a ____ programming language?",
        a:"High Level",
        b:"Interpreted",
        c:"General Purpose",
        d:"All of the above",
        ans:"ans4"
    },
    {
        question:"Q8:when python is published?",
        a:"1989",
        b:"1990",
        c:"1991",
        d:"1992",
        ans:"ans3"
    },
    {
        question:"Q9: What is the Full Form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q10:Javascript is an _______ Language?",
        a:"Object-Based",
        b:"Object-Oriented",
        c:"Procedural",
        d:"None of the above",
        ans:"ans2"
    }
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    // console.log(quizeQue[0].question)
    const questionList=quizeQue[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();
const checkAnswer=()=>{
    let answer;
    answers.forEach((currentAnswer)=>{
        if(currentAnswer.checked){
            answer=currentAnswer.id;
        }
    });
    return answer;
};
const deSelect=()=>{
    answers.forEach((currentAnswer)=> currentAnswer.checked=false)
};
submit.addEventListener("click",()=>{
    const chAns=checkAnswer();
    console.log(chAns);
    if(chAns==quizeQue[questionCount].ans){
        score++;
    }
    questionCount++;
    deSelect()
    if(questionCount<quizeQue.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizeQue.length}✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove("scoreArea")
    }
});