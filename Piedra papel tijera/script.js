let count = 0;
let winnings = 0;
function solve() {
    let choices = ['PIEDRA', 'PAPEL', 'TIJERA'];
    let playerChoice = (document.getElementById('player').value).toUpperCase();
    let compChoice = choices[Math.floor(Math.random()*3)];
    console.log(compChoice);
    console.log(playerChoice);
    count++;
    document.getElementById("computer").value = compChoice;

    if (playerChoice === '' || (playerChoice !== 'PIEDRA' && playerChoice !== 'TIJERA' && playerChoice !== 'PAPEL')) {
        return alert ('Introduce una respuesta válida: PIEDRA - PAPEL - TIJERA');
    }
    if (playerChoice === compChoice) {
        return document.getElementById("result").innerHTML = winnings +'/' +count +' EMPATE :/';
    }
    if (playerChoice === 'PIEDRA'){
        if (compChoice === 'PAPEL') {
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' PIERDES :(';
        } else {
            winnings++;
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' ¡GANAS! :)';
        }
    }
    if (playerChoice === 'PAPEL'){
        if (compChoice === 'TIJERA') {
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' PIERDES :(';
        } else {
            winnings++;
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' ¡GANAS! :)';
        }
    }
    if (playerChoice === 'TIJERA'){
        if (compChoice === 'PIEDRA') {
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' PIERDES :(';
        } else {
            winnings++;
            return  document.getElementById("result").innerHTML = winnings +'/' +count +' ¡GANAS! :)';
        }
    }
}
