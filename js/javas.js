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
