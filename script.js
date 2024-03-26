// Abrir modal al hacer clic en el botón
document.getElementById("abrir-modal").onclick = function() {
    document.getElementById("miModal").style.display = "block";
}

// Cerrar modal al hacer clic en la "x" o en el botón de cerrar
document.getElementsByClassName("cerrar-modal")[0].onclick = function() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido de la ventana modal
window.onclick = function(event) {
    if (event.target == document.getElementById("miModal")) {
        document.getElementById("miModal").style.display = "none";
    }
}

function copiarEnlace(idElemento) {
    var elemento = document.getElementById(idElemento);
    if (!elemento) {
        console.error('El elemento con el ID especificado no existe.');
        return;
    }

    var r = document.createRange();
    r.selectNode(elemento);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // Cambiar el contenido y estilo del botón clicado
    var botonCopiar = elemento.nextElementSibling; // Obtenemos el botón que está al lado del elemento clicado
    if (botonCopiar && botonCopiar.tagName === 'BUTTON') {
        botonCopiar.textContent = 'Copiado';
        botonCopiar.style.backgroundColor = '#189A0E';
        botonCopiar.disabled = true; // Deshabilitar el botón para evitar copias adicionales
    }
}
