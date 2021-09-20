let userSelectedMove = 0;

function computerRPS() {
    let randNum = Math.random() * (2 - 1 + 1) + 1;
    return Math.round(randNum);
}


document.getElementById('Rock').onclick = () => {
    userSelectedMove = 1;
    console.log('rock');
}

document.getElementById('paper').onclick = () => {
    userSelectedMove = 2;
}

document.getElementById('scissors').onclick = () => {
    userSelectedMove = 3;
}
console.log(computerRPS())

function compareResults() {
    if () {

    }
}