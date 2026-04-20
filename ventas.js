const VENTAS_BASE = 5;

/**
 * Valida el campo de ventas específicamente (tipo, negativos y longitud)
 */
function validarVentasFull() {
    let valorTexto = recuperarTexto("txtVentas");
    let componenteError = document.getElementById("errVentas");
    let input = document.getElementById("txtVentas");
    let valorNum = parseFloat(valorTexto);

    if (valorTexto === "" || isNaN(valorNum)) {
        mostrarError(input, componenteError, "Ingrese un número válido");
        return false;
    } else if (valorNum < 0) {
        mostrarError(input, componenteError, "No se permiten números negativos");
        return false;
    } else if (valorTexto.length > 5) {
        mostrarError(input, componenteError, "Máximo 5 caracteres");
        return false;
    } else {
        limpiarError(input, componenteError);
        return true;
    }
}

/**
 * Valida campos genéricos (Sueldo y Precio) para evitar vacíos y negativos
 */
function validarCampo(idInput, idError) {
    let valorTexto = recuperarTexto(idInput);
    let componenteError = document.getElementById(idError);
    let input = document.getElementById(idInput);
    let valorNum = parseFloat(valorTexto);

    if (valorTexto === "" || isNaN(valorNum)) {
        mostrarError(input, componenteError, "Dato requerido");
        return false;
    } else if (valorNum < 0) {
        mostrarError(input, componenteError, "No puede ser negativo");
        return false;
    } else {
        limpiarError(input, componenteError);
        return true;
    }
}

// Funciones auxiliares de interfaz para no repetir código
function mostrarError(input, span, mensaje) {
    span.textContent = mensaje;
    input.classList.add("input-error");
}

function limpiarError(input, span) {
    span.textContent = "";
    input.classList.remove("input-error");
}

/**
 * Realiza el cálculo final si todas las validaciones pasan
 */
function calcular() {
    // Ejecutar todas las validaciones
    let esSueldoValido = validarCampo('txtSueldoBase', 'errSueldo');
    let esVentasValido = validarVentasFull();
    let esPrecioValido = validarCampo('txtPrecio', 'errPrecio');

    if (esSueldoValido && esVentasValido && esPrecioValido) {
        let sueldoBase = recuperarTextoFloat("txtSueldoBase");
        let numeroVentas = recuperarTextoFloat("txtVentas");
        let precioProducto = recuperarTextoFloat("txtPrecio");

        let comision = calcularComision(numeroVentas, precioProducto);
        let total = sueldoBase + comision;

        // Mostrar resultados formateados
        mostrarTexto("spSueldoBase", "$" + sueldoBase.toFixed(2));
        mostrarTexto("spComision", "$" + comision.toFixed(2));
        mostrarTexto("spTotal", "$" + total.toFixed(2));
    }
}

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.1);
    }
    return comision;
}