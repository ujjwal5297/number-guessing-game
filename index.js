let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
// let entryCount = 0;
// let entryLimit = 3;
// let error = false;

Attempts = 3;

let number = [Math.floor(Math.random()*10)];

attemptID = document.getElementById('Attempts');
attemptID.innerHTML = `Attempts left : ${Attempts}`;




btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML= `You guessed right number, your number was ${number}`;
        document.body.style.backgroundColor = 'green';
    }
    // while(input != number) {
    //     output.innerHTML= 'You guessed wrong number';
    //     entryCount= entryCount++;}

    //     while(entryCount = entryLimit) {
    //         document.getElementById("userInput").disabled = true;
    //     }
    else if (input != number){
        output.innerHTML= 'You guessed wrong number';
        document.body.style.backgroundColor = 'red';

        Attempts = Attempts - 1;
        console.log("Attempts left : "+Attempts);

        attemptID.innerHTML = `Attempts left : ${Attempts}`;

        if(Attempts==0)
        {
            document.getElementById("btn").disabled = true;
            NoAttemptsLeftId= document.getElementById('NoAttemptsLeft');
            NoAttemptsLeftId.innerHTML="Oops ! You ran out of attempts :("
        }

        // for(let i= 0;i< entryLimit; i++) {
        //     entryCount= i;
        //     console.log(entryCount);
        //     // while(entryCount=2){
        //     //     document.getElementById('userOuptut').disabled = true;
        //     //     output.innerHTML = 'You have reached the maximum attempts, you cannot guess more'
        //     // }
        // }
    };
    // if(input > number) {
    //     output.innerHTML= 'You guessed too high';
    //     document.body.style.backgroundColor = 'red';
    //     entryCount= entryCount++
    // };
})
// console.log(entryCount)