/*function multiply(){
    let a = document.getElementsByClassName("number")[0].value;
    if (isNaN(a) || a === "") {
        return alert('Introduce un número válido')
    }
    //isNaN(a) ? alert('Introduce un número válido');
    for (var i = 0; i < 11; i++) {
        let result = a * i;
        document.getElementById("result").innerHTML += a + ' * ' + i + ' = ' + result +  "<br>";
    }
}*/



function chair() {
    var altura = document.getElementById('altura').value;
    var ancho = document.getElementById('anchura').value;
    var asiento = Math.floor((altura/2)+1);
    var srt = "x";
    var empty = "&nbsp;&nbsp;";
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    for (let i = 0; i < altura; i++) {

        if (i === asiento-1) {
            document.getElementById("result").innerHTML += srt.repeat(ancho)+"<br>";
            console.log(srt.repeat(ancho)+"\n");
        } else if (i > asiento-1) {
            document.getElementById("result").innerHTML += srt + empty.repeat(ancho-2) + srt + "<br>";
            console.log(srt + empty.repeat(ancho-2) + srt);
        } else {
            document.getElementById("result").innerHTML += srt + "<br>";
            console.log(srt)
        }

    }
}
