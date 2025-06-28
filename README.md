# Aprendiendo JavaScript con Blueeweb.
## Programación básica (pseint)
https://bluuweb.dev/04-javascript/
#### Ejemplo suma:
```html
Algoritmo Suma

    // para cargar un dato, se le muestra un mensaje al usuario
    // con la instrucción Escribir, y luego se lee el dato en
    // una variable (A para el primero, B para el segundo) con
    // la instrucción Leer

    Escribir "Ingrese el primer numero:"
    Leer A

    Escribir "Ingrese el segundo numero:"
    Leer B

    // ahora se calcula la suma y se guarda el resultado en la
    // variable C mediante la asignación (<-)

    C <- A+B

    // finalmente, se muestra el resultado, precedido de un
    // mensaje para avisar al usuario, todo en una sola
    // instrucción Escribir

    Escribir "El resultado es: ",C

FinAlgoritmo
```
### Datos (pseint):
```
Algoritmo super_suma
	
    textoUno = "Esto es un String";
	Escribir textoUno;

	numeroUno = 25;
	Escribir numeroUno;

	estadoActual = Verdadero;
	Escribir estadoActual;

FinAlgoritmo
``` 
### Concatenación
```
Algoritmo super_suma

	Imprimir "Ingrese su nombre"
	leer nombreUsuario
	Imprimir "Bienvenido: " , nombreUsuario

	Imprimir "Ingrese primero número"
	leer primerNumero

	Imprimir "Ingrese segundo número"
	leer segundoNumero

	resultadoSuma = primerNumero + segundoNumero

	Imprimir nombreUsuario , " el resultado es: " , resultadoSuma

FinAlgoritmo
```
### Operadores
#### Operadores Aritméticos
Adición: Suma dos números juntos.
```
resultado = 20 + 10;
Mostrar resultado; 
```
Resta: Resta el numero de la derecha del de la izquierda.
```
resultado = 20 - 10;
Mostrar resultado;
```
Multiplicación: Multiplica dos números juntos.
```
resultado = 20 * 10;
Mostrar resultado;
```
División: Divide el número de la izquierda por el de la derecha.
```
resultado = 20 / 10;
Mostrar resultado;
```
Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
```
resultado = 10 % 3;
Mostrar resultado;
```
#### Operadores relacionales
Los operadores relacionales o comparación definidos por PseInt son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (==) y distinto de (!=, <>).
```
resultado = 10 > 11;
Mostrar resultado;
```
```
resultado = 10 <= 10;
Mostrar resultado;
```
```
resultado = 10 == 11;
Mostrar resultado;
```
```
resultado = 10 <> 11;
Mostrar resultado;
```
#### Operadores lógicos
- && (y): Si los dos son verdaderos devuelve verdadero.
- || (o): Basta con que uno sea verdadero para que devuelva verdadero.
- ! (no): Negación
```
resultado = 20 > 10 y 50 < 100
Mostrar resultado
```
```
resultado = !Verdadero
Mostrar resultado
```
### if/else (si/no)
```
Algoritmo super_suma

	Mostrar "Ingrese un número del 1 al 10"
	Leer numeroIngresado
	Si ( numeroIngresado <= 10 ) Entonces
		Escribir 'Correcto!!'
	SiNo
		Escribir 'Super mal!!'
	FinSi

FinAlgoritmo
```
```
Algoritmo super_suma

	Mostrar "adivina número del 1 al 10"
	leer nUser
	nMaquina = 6
	Si (nUser == nMaquina)
		Mostrar "Adivinaste!!"
	SiNo
		Si(nMaquina > nUser)
			Mostrar "Era más alto"
		SiNo
			Mostrar "Era más bajo"
		FinSi
		Mostrar "El número era: " , nMaquina
	FinSi

FinAlgoritmo
```
### switch (según)
```
Algoritmo menu

	Mostrar "¿Aburrido? elija una opción:"
	Mostrar "1. Lectura"
	Mostrar "2. Cine"
	Mostrar "3. Juego"
	Mostrar "Ingrese número"

	Leer opcionElegida

	Segun opcionElegida
		1:
			Escribir "Lectura recomendada"
			Escribir "* Principito"
		2:
			Escribir "Película recomendada"
			Escribir "* Matrix"
		3:
			Escribir "Juego recomendado"
			Escribir "* NFS"
		De Otro Modo:
			Escribir "opción no válida"
	FinSegun

FinAlgoritmo
```
### while (mientras)
```
Algoritmo while
	n <- 0
	Mientras (n<=5) Hacer
		Escribir 'vuelta: ' , n
		n <- n+1
	FinMientras
FinAlgoritmo
```
### Práctica: juego adivinar
```
Algoritmo super_suma
	numAzar = Aleatorio(1,10)
	Mostrar numAzar
FinAlgoritmo
```
```
Algoritmo aprender_while
	// genero un número aleatorio
	nAzar = Aleatorio(1,10)

	intentos = 3

	Mostrar "adivina número del 1 al 10, tienes: " , intentos , " intentos"
	Mostrar "Ingresa número"
	leer nUser

    // si el número no es igual entrará al while
	Mientras (nAzar <> nUser y intentos > 1)

        Si (nAzar > nUser)
			Mostrar "muy bajo"
		SiNo
			Mostrar "muy alto"
		FinSi

        // restamos 1 intento
		intentos = intentos - 1
		Mostrar "Te quedan... " , intentos , " intentos!"

        // caputamos número user
		Leer nUser
	FinMientras

	Si (nAzar == nUser)
		Mostrar "Adivinaste!!"
	SiNo
		Mostrar "Perdiste!! se te acabaron los intentos!"
	FinSi

FinAlgoritmo
```
### Array (Arreglos)
```
Algoritmo array_for

	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"

	Mostrar frutas[1]
	Mostrar frutas[2]
	Mostrar frutas[3]

FinAlgoritmo
```
### for (para)
```
Algoritmo array_for

	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"

	Para i Desde 1 Hasta 3 Hacer
		Mostrar frutas(i)
	FinPara

FinAlgoritmo
```
### for of
```
Algoritmo for_of

	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"

	Para Cada elemento de frutas Hacer
		Mostrar elemento
	FinPara

FinAlgoritmo
```
### Funciones
```
Función si argumento o parámetros
Funcion Saludar
	Mostrar "Hola Bienvenido!"
FinFuncion

Algoritmo ejemplo_func

	Saludar()

FinAlgoritmo
```
Con argumentos
```
Funcion Saludar (nombreUsuario)
	Mostrar "Hola Bienvenido! " , nombreUsuario
FinFuncion

Algoritmo ejemplo_func

	Saludar("Juanito")

FinAlgoritmo
```
Con retorno
```
Funcion resultado = Sumar ( n1, n2 )
	resultado = n1 + n2
Fin Funcion

Algoritmo ejemplo_func

	Mostrar "Ingrese número 1"
	leer numUno
	Mostrar "Ingrese número 2"
	leer numDos

	Mostrar "Suma es: " , Sumar(numUno, numDos)

FinAlgoritmo
```
---
## Javascript (Fundamentos)
https://bluuweb.dev/04-javascript/02-js-fundamentos.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"
    /><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Aprendindo JS</title>
</head>
<body>
    <h1>Aprendindo JS</h1>
    <!-- Mejor ubicación del script de JS -->
    <script src="js/app.js"></script>
  </body>
</html>
```
### Consola
```js
//pintar en la consola
console.log("hola esta es la consola 👌");
```
### Tipos de datos
- String: se utiliza para representar datos textuales.
- Number: valores numéricos.
- Boolean: representa una entidad lógica y puede tener dos valores: true y false.
```js
console.log("un valor de tipo texto");
console.log(20);
console.log(1.2);
console.log(1, 62);
console.log(1 + 1);
console.log(true);
console.log(false);
```
### Variables
- var
- let
- const
```js
//definir una variable
let x = 10;
let y = false;
let z = x;
let n = "Juanito";
```
### Concatenación
```js
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;
console.log(joined);
```
Variante
```js
console.log(one + two);
```
Variante
```js
console.log("Hello, " + "how are you?");
```
Números
```js
var numeroUno = 100;
var numeroDos = 200;
console.log(numeroUno + numeroDos);
```
### Prompt()
```js
prompt("Ingresa un apellido");

// se guarada en una variable
let apellido = prompt("Ingresa un apellido");

// se pinta en la consola
console.log(apellido);
```
- typeof: El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo
- parseInt: Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
```js
let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");

console.log(typeof numeroUno);

let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado);
```
### Operadores
#### Operadores aritméticos
Adición: Suma dos números juntos.
```js
let resultado = 1 + 1;
console.log(resultado);
```
Resta: Resta el numero de la derecha del de la izquierda.
```js
let resultado = 2 - 1;
console.log(resultado);
```
Multiplicación: Multiplica dos números juntos.
```js
let resultado = 5 * 20;
console.log(resultado);
```
División: Divide el número de la izquierda por el de la derecha.
```js
let resultado = 20 / 5;
console.log(resultado);
```
Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
```js
let resultado = 8 % 3;
console.log(resultado);
```
#### Operadores Relacionales
```js
let resultado = 20 > 10;
console.log(resultado);
```
```js
let resultado = 20 < 10;
console.log(resultado);
```
```js
let resultado = 20 === 10;
console.log(resultado);
```
```js
let resultado = 20 == "20";
console.log(resultado);
```
```js
let resultado = 20 !== 10;
console.log(resultado);
```
```js
let resultado = 10 != "10";
console.log(resultado);
```
#### Operadores lógicos
- && : Si los dos son verdaderos devuelve verdadero.
- || : Con que uno sea verdadero devolverá verdadero.
- ! : Negación
```js
let resultado = true && true;
console.log(resultado);
```
```js
let resultado = 20 > 10 && 10 < 20;
console.log(resultado);
```
```js
let resultado = true && true && false;
console.log(resultado);
```
```js
let resultado = true || false;
console.log(resultado);
```
```js
let resultado = true || false || false;
console.log(resultado);
```
```js
let resultado = !false;
console.log(resultado);
```
### Estructuras de control
#### if/else
```js
f (condicion) {
  // bloque verdadero
} else {
  // bloque falso
}
```
Ejemplo #01
```js
let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
  console.log("Lo escribiste super bien!");
} else {
  console.log("Lo escribiste mal");
}
```
Ejemplo #02
```js
let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
  // Sentencia true
  console.log("Genial!!");
} else {
  // Sentencia false
  console.log("Super mal!!");
}
```
#### switch 
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
-"`" = alt + 96
```js
let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
  case "1":
    console.log("Principito");
    break;
  case "2":
    console.log("Matrix");
    break;
  case "3":
    console.log("NFS");
    break;
  default:
    console.log("Opción no válida");
    break;
}
```
#### while
while: Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
```js
let numero = 0;
while (numero <= 10) {
  console.log(numero);
  numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);
```
##### Práctica: Juego de adivinar
- Math.random(): La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1].
```js
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```
```js
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}
```


