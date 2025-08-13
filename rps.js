function getcomputerchoice(){
    function getrandomint(max){
        return Math.floor(Math.random() * max)
    }

    var choice = getrandomint(3)
    if (choice > 0){
        return console.log("rock")
    }
    else if(choice < 0){
        return console.log("paper")
    }
    else{
        return console.log("scissors")
    }

}