let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let Attempts = 3;

let number = [Math.floor(Math.random()*10)];

attemptID = document.getElementById('Attempts');
attemptID.innerHTML = `Attempts left : ${Attempts}`;

const startingseconds = 60;
let time =startingseconds;

const countDown = document.getElementById('timer');

setInterval(updateCountDown(), 1000);

function updateCountDown() {
    countDown.innerHTML = `Time Remaining: ${startingseconds}`;
    time--;
}


btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML= `You guessed right number, your number was ${number}`;
        document.body.style.backgroundColor = 'green';
    }

    else if (input != number){
        output.innerHTML= 'You guessed wrong number';
        document.body.style.backgroundColor = 'red';

        Attempts = Attempts - 1;
        console.log("Attempts left : "+Attempts);

        attemptID.innerHTML = `Attempts left : ${Attempts}`;

        if(Attempts==0 || time == 0)
        {
            document.getElementById("btn").disabled = true;
            NoAttemptsLeftId= document.getElementById('NoAttemptsLeft');
            NoAttemptsLeftId.innerHTML= `Oops! you ran out of attempts or time, the correct number was ${number}`
        }
    };
})