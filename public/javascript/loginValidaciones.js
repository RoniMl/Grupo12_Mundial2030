let validarLogin = document.getElementById("formularioLogearse");
let mensajeEmail = document.getElementById("mensajeErrorEmail");
let mensajeContrasena = document.getElementById("mensajeErrorContrasena");

validarLogin.addEventListener("submit", function(e){
    e.preventDefault();

    let campoEmail = document.getElementById("correoPagLogin");
    let campoContrasena = document.getElementById("contrasenaPagLogin");
    
    let errorLogin = 0;
    mensajeEmail.innerText = "";
    mensajeContrasena.innerText = "";

    if(!(campoEmail.value)){
        mensajeEmail.innerText = "Debe ingresar un email valido";
        mensajeEmail.style.color = "red";
        errorLogin = 1;
    }

    if(!(campoContrasena.value)){
        mensajeContrasena.innerText = "Debe ingresar una contraseña";
        mensajeContrasena.style.color = "red";
        errorLogin = 1;
    }

    if(errorLogin == 0){
        validarLogin.submit();
    }else{
        return;
    }

});