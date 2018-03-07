function calcule() {
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let op = document.getElementById("operator").value;
    if (/[\/*+-]/.test(op) ) {
        var result = eval(a+op+b);
        document.getElementById("result").innerHTML += result;
    } else {
        alert('Introduce un valor de operación válido "+-*/"');
    }

}
