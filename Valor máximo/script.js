function maxValue() {
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    if (first > second) {
        document.getElementById("result").innerHTML += first;
    } else if (first < second){
        document.getElementById("result").innerHTML += second;
    } else {
        document.getElementById("result").innerHTML += 'Ambos números son iguales';
    }
}
