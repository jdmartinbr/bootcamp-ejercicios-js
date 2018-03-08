
function position() {
    var num = document.getElementById('number').value;
    var pos = document.getElementById('position').value;
    document.getElementById("result").innerHTML = 'Resultado<br><br>';
    if (pos > num.length) {
        return document.getElementById("result").innerHTML += '-1'
    } else {
        var index = num.length-pos;
        document.getElementById("result").innerHTML += num[index];
    }
}
