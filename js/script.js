window.onload = function() {
    var imagen = document.getElementById("imagen");
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    document.getElementById("form").addEventListener("reset",function(){document.getElementById("candado").src="img/candado.png";});
    document.getElementById("enviar").addEventListener("click",function() { cargaDatos(user, pass, imagen); }, true);
    imagen.addEventListener("load", function() { passCorrecto(user, pass) }, true);
    imagen.addEventListener("error", function() { passIncorrecto() }, true);
}
function cargaDatos(user, pass, imagen) {
    imagen.src = "img/"+user.value+"-"+pass.value+".jpg";
}
function passCorrecto(user, pass) {
    document.getElementById("candado").src = "img/abierto.png";
    window.open("server/"+user.value+"-"+pass.value+".html");
}
function passIncorrecto() {
    document.getElementById("candado").src = "img/cerrado.png";
}