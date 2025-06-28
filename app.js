// //tipos de datos
// console.log('Hello, World!');
// console.log('This is a "simple" /JavaScript/ application.');
// console.log(20);
// console.log('20');
// console.log(20.6);
// console.log(20, 30);
// console.log(true);
// console.log('false');

// //variables
// let nombreUsuario = "Ivan";
// let edadUsuario = 40;
// console.log(nombreUsuario);
// console.log(edadUsuario);

// //concatenación
// console.log('Hola, ' + nombreUsuario + '. Tienes ' + edadUsuario + ' años.');

// //operaciones aritméticas
// let numeroUno = 10;
// let numeroDos = 20;
// console.log(numeroUno + numeroDos);

// let numeroUno1 = prompt("Ingrese un número:");
// let numeroDos1 = prompt("Ingrese otro número:");
// console.log(typeof numeroUno1);

// //Idem:
// let numeroUno2 = 10;
// let numeroDos2 = 20;
// console.log(numeroUno2 + numeroDos2);

// let numeroUno3 = parseInt(prompt("Ingrese un número:"));
// let numeroDos3 = parseInt(prompt("Ingrese otro número:"));
// console.log(typeof numeroUno3)

// let resultado = numeroUno3 + numeroDos320;
// console.log(resultado);

// //operadores aritméticos
// let resultadoUno = 10.5 - 20;
// console.log(resultadoUno);

// let resultadoDos = 20 % 10;
// console.log(resultadoDos);

// let resultadoTres = 2*10/5+10;
// console.log(resultadoTres);

// //operadorres relacionales
// let resultado1 = 10 > 20;
// console.log(resultado1);

// let resultado2 = 10 < 20;
// console.log(resultado2);

// let resultado3 = 10 == 10;
// console.log(resultado3);

// let resultado4 = 10 == "10";
// console.log(resultado4);

// //igualación estricta
// let resultado5 = 10 === "10";
// console.log(resultado5);

// let resultado6 = 10 != 12;
// console.log(resultado6);

// //desigualdad estricta
// let resultado7 = 10 !== "12";
// console.log(resultado7);

// //operadores lógicos
// //AND
// let resultado1 = true && true && true;
// console.log(resultado1);
// let resultado2 = true && true && false;
// console.log(resultado2);
// //OR
// let resultado3 = true || false || true;
// console.log(resultado3);
// //NOT
// let resultado4 = !true;
// console.log(resultado4);

// //estructuras de control

// if (condicion) {
// // bloque verdadero
// }else { 
// // bloque falso
// };

// //ejemplo de estructura de control
// let strigUsiario = prompt('Escriba "JavaScript" para continuar:');
        
// if (strigUsiario === "JavaScript") {
//     console.log('¡Correcto! ingresó la palabra "JavaScript".');
// } else {
//     console.log('Incorrecto, intente nuevamente.');
// };

// //ejemplo de estructura de control con else if
// let numUsuario = parseInt (prompt ('Ingrese un número del 1 al 10:'));
            
// if (numUsuario <= 10) {

// } else{
//     console.log ('El número ingresado es mayor a 10, intente nuevamente.');
// }

// //ejemplo de estructura de control con switch
// let opcionUsuario = prompt(`
//     Elija una opción:
//     1: Libros
//     2: Películas
//     3: Juegos`);
            
// console.log(opcionUsuario);
//     switch (opcionUsuario) {
//         case '1': console.log('El Principito.');
//         break;
//         case '2': console.log('Matrix.');
//         break;
//         case '3': console.log('NFS.');
//         break;
//         default: console.log("Opción no válida, intente nuevamente.");
//         break;
//     };
        
// //bucles
//     let numero = 1;
//     while (numero <= 10) {
//         console.log(numero);
//         // numero = numero + 1;
//         // Incrementar el número en 1
//         numero++;
//     };
        
//     console.log('Fin del bucle: ' + numero);



// Juego de adivinanza de números

// El usuario tiene 3 vidas para adivinar un número del 1 al 10       
let numeroMaquina = Math.floor(Math.random() * 10) + 1;
console.log(numeroMaquina);

let vidas = 3;
let numeroUsuario = parseInt(prompt('Adivina un número del 1 al 10'));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
    vidas--;

    if (numeroMaquina < numeroUsuario) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    console.log('Número incorrecto, te quedan ' + vidas + ' vidas.');

    numeroUsuario = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUsuario) {
    console.log('¡Felicidades! Adivinaste el número.');
} else {
    console.log('Perdiste, no adivinaste el número. El número era: ' + numeroMaquina + '. Inténtalo nuevamente.');
}


