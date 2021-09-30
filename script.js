let plus =document.getElementsByClassName('plus')[0]
// console.log(plus)
let timeTitle = document.getElementById('red')
let record = document.getElementById('yellow')
let scoreTitle = document.getElementById('green')
let share = document.getElementsByClassName('share')[0]
let multiply = document.getElementsByClassName('multiply')[0]
let answer = document.getElementById('answer')
let confirm = document.getElementById('confirm')
let exercise = document.getElementById('exercise')
let minus = document.getElementById('minus')

let highScore=0;
confirm.disabled=true
let sign,correctAnswer,score,time,timer, firstNumber, secondNumber;
function setTimer(){
    score=0
    answer.focus()
    confirm.disabled=false

    scoreTitle.innerHTML='Счёт: '+'0'
    clearInterval(timer)
    time=60;
    timer=setInterval(function(){
        time=time-1
        timeTitle.innerHTML='Время: '+time
        if(time==0){
            confirm.disabled=true
            
            clearInterval(timer)
            
            // if(record>score)
            // record.innerHTML='Рекорд: '+
            // record.innerHTML='Рекорд: '+highScore
        }

    },1000)

}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
confirm.onclick = function(event){
    event.preventDefault()
    console.log('coca cola');
    if(correctAnswer==answer.value){
        score=score+1
        scoreTitle.innerHTML='Счёт: '+score
    }
    if(score>highScore){
        highScore=score
        record.innerHTML='Рекорд: '+highScore
    }
    // console.log(answer);
    console.log(answer.value);
    getExercise();
    answer.value=''
    answer.focus()
}
function getExercise(){
    if(sign=='+'){
        firstNumber= getRandom(6,75)
        secondNumber = getRandom(6,75)

    }
    else if(sign=='-'){
        firstNumber=getRandom(50,100)
        secondNumber=getRandom(0,50)
    }
    else if(sign=='*'){
        firstNumber=getRandom(0,10)
        secondNumber=getRandom(0,20)
    }
    else{
        firstNumber=getRandom(10,100)
        secondNumber=getRandom(0,100)
        while(firstNumber%secondNumber!=0){
            firstNumber=getRandom(10,100)
            secondNumber=getRandom(0,100)
            console.log(firstNumber, secondNumber);
        }
    }
    let example= firstNumber+sign+secondNumber
    correctAnswer = eval(example)
    exercise.innerHTML="Пример: "+ example
}
plus.onclick = function(){
    console.log('+');
    sign='+'
    getExercise();
    setTimer();

}
minus.onclick = function(){
    sign='-'
    getExercise();
    setTimer()
}
multiply.onclick = function(){
    console.log('*');
    sign='*'
    setTimer()
    getExercise();
}
share.onclick = function(){
    sign='/'
    setTimer()
    getExercise()
}


// блокировать кнопку