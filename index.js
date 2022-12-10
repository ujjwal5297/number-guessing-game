let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let Attempts = 3;

let number = 2;



    var seconds = 60;
    function tick() 
    {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML ="0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) 
      {
        setTimeout(tick, 1000);
      } 
      else 
      {
        document.getElementById("btn").disabled = true;
        document.getElementById("timeLeft").innerHTML="OOPS ! You ran out of time ! :("
        document.getElementById("correctAnswer").innerHTML=`The correct guess was : ${number}`
        
      }
    }
    tick();


attemptID = document.getElementById('Attempts');
attemptID.innerHTML = `Attempts left : ${Attempts}`;

// let time = 60;

// const countDown = document.getElementById('timer');


// function updateCountDown(x) {
    
//     countDown.innerHTML = `Time Remaining: ${time}`;
//     x-1;
// };
// setInterval(updateCountDown(time), 1000);
// console.log(updateCountDown(time));


let attempts = 0;

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
      
        output.innerHTML= `You guessed right number, your number was ${number}, you guess the right answer in ${attempts+1} attempts`;
        document.body.style.backgroundColor = 'green';
    }

    else if (input != number){
      attempts++
        output.innerHTML= 'You guessed wrong number';
        document.body.style.backgroundColor = 'red';

        Attempts = Attempts - 1;
        console.log("Attempts left : "+Attempts);

        attemptID.innerHTML = `Attempts left : ${Attempts}`;

        if(Attempts== 0 )
        {
            document.getElementById("btn").disabled = true;
            NoAttemptsLeftId= document.getElementById('NoAttemptsLeft');
            NoAttemptsLeftId.innerHTML= `Oops! you ran out of attempts or time, the correct number was ${number}`
        }
    };
})