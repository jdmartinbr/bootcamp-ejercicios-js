function multiply(){
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    let a = document.getElementsByClassName("number")[0].value;
    if (isNaN(a) || a === "") {
        return alert('Introduce un número válido')
    }
    //isNaN(a) ? alert('Introduce un número válido');
    for (var i = 0; i < 11; i++) {
        let result = a * i;
        document.getElementById("result").innerHTML += a + ' * ' + i + ' = ' + result +  "<br>";
    }
}