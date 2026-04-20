function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}

function recuperarTextoFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function mostrarTexto(idSpan, textoFloat) {
    let contenido = document.getElementById(idSpan);
    contenido.textContent = textoFloat;
}