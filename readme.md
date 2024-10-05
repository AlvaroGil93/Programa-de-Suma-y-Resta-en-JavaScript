# Programa de Suma y Resta en JavaScript

Este es un simple programa en JavaScript que solicita al usuario dos números, luego calcula y muestra la suma y la resta de esos dos números.

## ¿Cómo funciona?

1. El programa pide al usuario que ingrese dos números a través de la función `prompt()`.
2. Los valores ingresados son convertidos a números con `parseFloat()`.
3. Se realizan dos operaciones:
   - **Suma:** Se suman ambos números.
   - **Resta:** Se resta el segundo número al primero.
4. Los resultados se muestran al usuario en la consola con `console.log()` y también a través de ventanas emergentes (`alert()`).

## Ejecución del programa

Para ejecutar el programa:

1. Abre el archivo `.html` que contenga el script JavaScript.
2. El navegador te pedirá que introduzcas dos números.
3. Una vez introducidos, verás los resultados tanto en la consola del navegador como en una alerta emergente.

## Ejemplo de código

```javascript
// Solicitar dos números al usuario
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

// Calcular la suma y la resta
let suma = num1 + num2;
let resta = num1 - num2;

// Mostrar los resultados en la consola
console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
console.log("La resta de " + num1 + " menos " + num2 es: " + resta);

// Mostrar los resultados en ventanas emergentes
alert("La suma de " + num1 + " y " + num2 + " es: " + suma);
alert("La resta de " + num1 + " menos " + num2 + " es: " + resta);
