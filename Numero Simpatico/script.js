/* Método sin utilizar la conversión a binario automática () */

function numeroSimpatico() {
    let num = parseInt(document.getElementsByClassName("number")[0].value);
    let number = parseInt(document.getElementsByClassName("number")[0].value);
    let temporalExponent = 0;
    let temporalBinary = 0;
    let numberBinary = 0;
    console.log(number)

    function convertToBinary() {
        while (temporalBinary <= number) {
            temporalBinary = Math.pow(2, temporalExponent);
            temporalExponent++;
        }
        numberBinary += Math.pow (10, temporalExponent-2);
        number -= Math.pow (2, temporalExponent-2);
        temporalExponent = 0;
        temporalBinary = 0;
        if (number > 0) {
            convertToBinary()
        } else {
            console.log('Convertido a binario: '+numberBinary)
        }
    }
    convertToBinary()

    let arr = (''+numberBinary).split('');
    console.log((''+numberBinary).split(''));

    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] !== arr[i+1]) {
            console.log('simpatico')
        } else {
            document.getElementById("result").innerHTML += num + " = " + arr + "<br> No es un número simpático";
            return
        }

    }
    document.getElementById("result").innerHTML += num + " = " + arr + "<br> Es un número simpático";
    return


}









