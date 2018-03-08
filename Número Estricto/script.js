function estricto() {
    document.getElementById("result").innerHTML =  "Resultado<br><br>";
    let N = document.getElementsByClassName("number")[0].value;
    var arr = (''+N).split('');
    var numbers = ['1','3','5'];

    while (arr[0]===numbers[0] || arr[0]===numbers[1] || arr[0]===numbers[2]) {
        arr.splice(0,1)
    }

    for (var i = 0; i < numbers.length; i++) {
        if (arr.indexOf(numbers[i])!==-1) {
            return document.getElementById("result").innerHTML +=  "No es un número simpático";
        }
    }
    return document.getElementById("result").innerHTML +=  "Es un número simpático";
}









