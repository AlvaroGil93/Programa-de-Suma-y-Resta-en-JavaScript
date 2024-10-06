# Programa de Suma y Resta en JavaScript

Este es un simple programa en JavaScript que solicita al usuario dos números, luego calcula y muestra la suma y la resta de esos dos números.

El archivo JavaScript contiene:
- Una función llamada `aceptar()` que se ejecuta al hacer clic en el botón.
- Dentro de esta función:
  - Se obtienen los valores de los campos de entrada.
  - Se validan los valores ingresados para asegurarse de que sean números.
  - Se realiza la operación de suma o resta según lo que el usuario haya ingresado.
  - Se muestra el resultado en la página.

## Ejecución del programa

1. Descarga los archivos `index.html` y `javas.js`.
2. Abre el archivo `index.html` en un navegador web.
3. Introduce dos números en los campos de texto.
4. Especifica la operación escribiendo "suma" o "resta" en el campo de texto correspondiente.
5. Haz clic en el botón "Enter".
6. El resultado se mostrará en la página.

## Ejemplo de código

```javascript
function aceptar() {
    // Obtener los valores de los inputs
    let num1 = parseFloat(document.getElementById('firtNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    let operation = document.getElementById('operation').value.toLowerCase();

    let resultado;

    // Verificar si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    // Realizar la operación según lo indicado
    if (operation === "suma") {
        resultado = num1 + num2;
    } else if (operation === "resta") {
        resultado = num1 - num2;
    } else {
        alert("Por favor, ingresa una operación válida (Suma o Resta).");
        return;
    }

    // Mostrar el resultado
    document.getElementById('resultado').textContent = resultado;
}
```

## Link para ver el navegador.

Aqui puedes interactuar con el programa [Ver](https://alvarogil93.github.io/Programa-de-Suma-y-Resta-en-JavaScript/)