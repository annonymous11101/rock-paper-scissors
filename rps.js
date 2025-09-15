function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1){
        console.log("computer choice : paper")
        return 1}
    else if (choice == 2){
        console.log("computer choice : scissors")
        return 2
    }
    else if (choice == 3){
        console.log("computer choice : rock")
        return 3
    }
}

function getHumanChoice(){
    let manchoice = prompt("choose between rock, paper, or scissors")
    manchoice = manchoice.toUpperCase();
    if (manchoice == "PAPER"){
        console.log("player choice : paper")
        return 1
    }
    else if (manchoice == "ROCK"){
        console.log("player choice : rock")
        return 2
    }
    else if (manchoice == "SCISSORS" || manchoice == "SCISSORS"){
        console.log("player choice : Scissors")
        return 3
    }
}

function playRound(humanChoice, computerChoice) {
        var computerscore = 0
        var humanscore = 0
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()  
        if(humanChoice == 1 && computerChoice == 2){
            console.log("You lose! scissors beats paper")
            computerscore++
            }
        else if(humanChoice == 2 && computerChoice == 2){
            console.log("You Win! rock beats scissors")
            humanscore++
            }
        else if(humanChoice == 3 && computerChoice == 2){
            console.log("Draw! scissors and scissors")
            }
        else if(humanChoice == 1 && computerChoice == 1){
            console.log("Draw! paper and paper")
            }
        else if(humanChoice == 2 && computerChoice == 1){
            console.log("You lose! paper beats rock")
            computerscore++
            }
        else if(humanChoice == 3 && computerChoice == 1){
            console.log("You win! scissors beats paper")
            humanscore++
            }
        else if(humanChoice == 1 && computerChoice == 3){
            console.log("You Win! Paper beats rock")
            humanscore++
            }
        else if(humanChoice == 2 && computerChoice == 3){
            console.log("Draw! rock and rock")
            }
        else if(humanChoice == 3 && computerChoice == 3){
            console.log("You Lose! rock beats scissors")
            computerscore++
            }
    }
    console.log("your score is : " + humanscore)
    console.log("the computers score is : " + computerscore)
    if(humanscore > computerscore){
        console.log("You've won !")
    }
    else if(computerscore > humanscore){
        console.log("You've lost! try again")
    }
    else if(computerscore == humanscore){
        console.log("It's a tie!")
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);