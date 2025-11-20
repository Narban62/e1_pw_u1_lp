function guardar() {
    validar();
    linmpiar();


}




function validar() {
let canton = document.getElementById("id_canton").value;
let provincia = document.getElementById("id_provincia").value;
if (canton==="") {
    mostrarAsterisco("error_canton");
}
if (provincia==="") {
    mostrarAsterisco("error_provincia");
}
}
function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText="*"
}



function limpiarInput() {
    setTimeout(() => {
        const errores = document.querySelectorAll(".error_a")
        errores.forEach(e => e.innerText = "");
    }, 3000);
}
function mostrarContenido(datos) {
    
}

function linmpiar() {
    document.getElementById("id_canton").innerText="";
    document.getElementById("id_provincia").innerText="";
    
}

function mostrarcanton() {
    document.getElementById("id_canton").value;
}

function mostrarprovincia() {
    document.getElementById("id_canton").value;
}