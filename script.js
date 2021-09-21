let userSelectedMove = 0;
let randNum = 0;


document.getElementById('Rock').onclick = () => {
    userSelectedMove = 0;
    computerRPS();
    compareResults();
}

document.getElementById('paper').onclick = () => {
    userSelectedMove = 1;
    computerRPS();
    compareResults();
}

document.getElementById('scissors').onclick = () => {
    userSelectedMove = 2;
    computerRPS();
    compareResults();
}

function computerRPS() {
    randNum = Math.floor(Math.random() * 3)
    console.log(randNum);
    return randNum;
}


function compareResults() {
    // what happens if we draw as each choice
    console.log('hello');
    if (userSelectedMove === 0 && randNum === 0) {
        document.getElementById('outcomeOfMatch').innerText = "Draw!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose rock!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'gray';
    } else if (userSelectedMove === 1 && randNum === 1) {
        document.getElementById('outcomeOfMatch').innerText = "Draw!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose paper!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'gray';
    } else if (userSelectedMove === 2 && randNum === 2) {
        document.getElementById('outcomeOfMatch').innerText = "Draw!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose scissors!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'gray';
    }

    //what happens when we win as each choise
    else if (userSelectedMove === 0 && randNum === 2) {
        document.getElementById('outcomeOfMatch').innerText = "You Win!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose scissors!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'green';
    } else if (userSelectedMove === 1 && randNum === 0) {
        document.getElementById('outcomeOfMatch').innerText = "You Win!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose rock!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'green';
    } else if (userSelectedMove === 2 && randNum === 1) {
        document.getElementById('outcomeOfMatch').innerText = "You Win!";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose paper!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'green';
    }

    //what happens when we lose as each choise 
    else if (userSelectedMove === 0 && randNum === 1) {
        document.getElementById('outcomeOfMatch').innerText = "You lose";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose paper!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'red';
    } else if (userSelectedMove === 1 && randNum === 2) {
        document.getElementById('outcomeOfMatch').innerText = "You lose";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose scissors!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'red';
    } else if (userSelectedMove === 2 && randNum === 0) {
        document.getElementById('outcomeOfMatch').innerText = "You lose";
        document.getElementById('computerMoveDetails').innerText = "The Computer chose rock!";
        document.getElementById('outcomeOfMatch').style.backgroundColor = 'red';
    }
}