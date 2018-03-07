function tree() {
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    var altura = document.getElementById('altura').value;
    var srt = "x";
    var empty = "&nbsp;&nbsp;";
    for (let i = 0; i < altura; i++) {
        i === 0 ? document.getElementById("result").innerHTML += empty.repeat(altura) + srt + '<br>' :
            document.getElementById("result").innerHTML += empty.repeat(altura-i)+srt.repeat((i*2)+1) + '<br>';
    }
    let tronco = Math.floor(altura/4);
    for (let j = 0; j < tronco; j++) {
        document.getElementById("result").innerHTML += empty.repeat(altura - 1) + srt.repeat(3) + '<br>';
    }

    // Si el div contenedor tiene text-align: center

    /*for (let i = 0; i < altura; i++) {
        i === 0 ? document.getElementById("result").innerHTML +=  srt + '<br>' :
            document.getElementById("result").innerHTML += srt.repeat((i*2)+1) + '<br>';
    }
    let tronco = Math.floor(altura/4);
    for (let j = 0; j < tronco; j++) {
        document.getElementById("result").innerHTML += srt.repeat(3) + '<br>';
    }*/
}
