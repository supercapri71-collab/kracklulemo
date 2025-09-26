saludar = function(){
    let cmpNombre = document.getElementById("txtNombre");
    let nombre = cmpNombre.value;
    let cmpApellido = document.getElementById("txtApellido");
    let apellido = cmpApellido.value;
    let resultado = generarSaludo(nombre,apellido);
    console.log(nombre + " " + apellido);
    let cmpResu=document.getElementById("lblResultado");
    cmpResu.innerText=resultado;
    return resultado;
}