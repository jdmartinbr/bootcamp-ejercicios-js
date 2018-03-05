# Actividades en JavaScript
Actividades para el desarrollo de los Fundamentos de JavaScript
## Actividades de Introducción.
### Tabla de multiplicar.
>Crea una pequeña aplicación JavaScript que genere las tablas de multiplicar para ello se debe preguntar la tabla que quiere y se representará en la consola.
```javascript
let tabla=prompt("Indicame la tabla de multiplicar");
```
### Diseño de silla.
> Crea una aplicación que nos pida la altura de la silla y nos dibuje por pantalla una silla con *.
> La única restricción que no debe ser menor de 7 ni mayor de 30 y la condición de que el asiento 
> este situado la mitad + 1
```
Indicame la altura? 10
*
*
*
*
*
******
*    *
*    *
*    *
```
### Diseño de un arbol de navidad.
> Crea una aplicación que nos pida la altura del arbol y nos dibuje por pantalla dicho arbol.
> Tiene que tener una altura mínima de 5
```
Indícame la altura? 5
    *
   *** 
  *****
 *******
*********
```

### Contador hacia atras.
> Crea una aplicación que nos muestre diferentes alerts contando desde 10 a 0 incluidos, utilizando el bucle de tipo While

### Calcular el máximo de dos valores.
> Dado dos valores nos debe indica cual es el mayor utilizando las sentencias if-then-else

### Creditos universitarios
>Crea una aplicación con JavaScript que permita calcular los créditos a convalidar con respecto a diferentes universidades. El usuario insertará una ciudad a la que desea convalidar los créditos. mediante un prompt .
>A continuación se muestra la convalidación de créditos (Se recomienda utilizar la estructura switch) mediante un alert:
>Universidad de Madrid y de Murcia: Se convalidarán 30 créditos
>Universidad de Alicante: No se convalidan créditos
>Universidad de Valencia, Granada y Córdoba: Se convalidan 50 créditos.

### Número estricto.
> Dado un número entero positivo N, se dice que es estricto si tiene los dígitos 1,3 y 5 al principio y los otros al final. Si no tiene dígitos 1,3,5, también es estricto.
>Se pide que desarrolles un programa que dado un número indique si es estricto o no.
>Ejemplo N=115924 es estricto, al principio 1 y 5 y los demás al estan al final.
>N=241781 No es estricto tiene al principio 2 y 4. N=1345. No es estricto, 5 está al final.
>N=51 o N=24 Son estrictos.

### Número simpático.
>Dado un número entero positivo N,  se dice que es simpático si se cumple lo siguiente: su expresión
en base 2 (binaria) viene dada por una combinación intercalada de unos (1) y ceros (0), es decir, después
de un 1 va un 0, luego un 1, luego un cero y así sucesivamente.
Se pide generar un programa que dado número N, indique si es simpático o no.
>Ejemplos
>N = 42  ES SIMPÁTICO, ya que su representación en  binario es 101010.
>N = 84    NO ES SIMPÁTICO, ya que su  representación en binario es 1010100

### Números naturales.
> Dado dos números naturales (mayores que cero): “N” e “i”, que imprima por pantalla el dígito que ocupa la posición iésima del número N. Si i es mayor que el número de dígitos de N, se escribirá por pantalla -1. Por ejemplo: N=25064 e i=2 el resultado es 6, para i=7 el resultado es -1.

### Mayor o menor que.
>Encuentre los valores mayor, menor y la suma de N datos de entrada. Encuentre elpromedio de esos datos mediante una función.  

### Número factorial.
>   Realice el factorial de N.

---

### Closure 1
> Comprobar el resultado de éste código, y después sustituye el var a por un let a
```javascript
function test(){
   console.log(a);
   console.log(prueba());
   
   var a =1;
   function prueba(){
    return 10;
    }
 }
 test();
 ```
 
 ### Closure 2
 > Crea una función padre  denominada cliente que tenga los atributos, nombre, appelido y edad.
 > Crea una función hija que devuelva los valores contanados de nombre y apellido de los atributos getNombreCompleto()
 
 ### Closure 3
 > Comprueba lo que devuelve la siguiente función.
 ```javascript
 var a = 1
 function primeraFuncion(numero) {
  function segundaFuncion(numero2){
   return a;
   }
   a = 5 ;
   return segundaFuncion;
 }
 var primerResultado = primeraFuncion(5);
 var resultado = primerResultado(2);
 ```
 
 --- 
