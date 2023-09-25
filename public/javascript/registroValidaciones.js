let validarRegistro = document.getElementById("formularioRegistrarse");
let listaErrores = document.getElementById("erroresRegistro");

let mensajeNombre = document.getElementById("mensajeErrorNombre");
let mensajeApellido = document.getElementById("mensajeErrorApellido");
let mensajeCorreo = document.getElementById("mensajeErrorCorreo");
let mensajeTelefono = document.getElementById("mensajeErrorTelefono");
let mensajeNacimiento = document.getElementById("mensajeErrorNacimiento");
let mensajeContrasena = document.getElementById("mensajeErrorContrasena");
let mensajeImagen = document.getElementById("mensajeErrorImagen");
let mensajeTerminos = document.getElementById("mensajeErrorTerminos");

validarRegistro.addEventListener("submit", function(e){
    e.preventDefault();
    listaErrores.style.display = "none";

    let campoNombre = document.getElementById("nombrePagReg");
    let campoApellido = document.getElementById("apellidoPagReg");
    let campoCorreo = document.getElementById("correoPagReg");
    let campoTelefono = document.getElementById("telefonoPagReg");
    let campoNacimiento = document.getElementById("nacimientoPagReg");
    let campoContrasena = document.getElementById("contrasenaPagReg");
    let campoImagen = document.getElementById("imagenPagReg");
    let campoTerminos = document.getElementById("aceptarTerminosPagReg");

    let errorRegistro = 0;

    mensajeNombre.innerText = "";
    mensajeApellido.innerText = "";
    mensajeCorreo.innerText = "";
    mensajeTelefono.innerText = "";
    mensajeNacimiento.innerText = "";
    mensajeContrasena.innerText = "";
    mensajeImagen.innerText = "";
    mensajeTerminos.innerText = "";

    if(!(campoNombre.value)){
        mensajeNombre.innerText = "Debe ingresar un nombre";
        mensajeNombre.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoApellido.value)){
        mensajeApellido.innerText = "Debe ingresar un apellido";
        mensajeApellido.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoCorreo.value)){
        mensajeCorreo.innerText = "Debe ingresar un correo";
        mensajeCorreo.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoTelefono.value)){
        mensajeTelefono.innerText = "Debe ingresar un telefono";
        mensajeTelefono.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoNacimiento.value)){
        mensajeNacimiento.innerText = "Debe ingresar su fecha de nacimiento";
        mensajeNacimiento.style.color = "red";
        errorRegistro = 1;
    }
    if((!(campoContrasena.value)) || (campoContrasena.value.length < 8)){
        mensajeContrasena.innerText = "Debe ingresar una contraseña con almenos 8 caracteres";
        mensajeContrasena.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoImagen.value)){
        mensajeImagen.innerText = "Debe ingresar una imagen de perfil";
        mensajeImagen.style.color = "red";
        errorRegistro = 1;
    }
    if(!(campoTerminos.checked)){
        mensajeTerminos.innerText = "Debe aceptar los terminos y condiciones";
        mensajeTerminos.style.color = "red";
        errorRegistro = 1;
    }



    if(errorRegistro == 0){
       // validarRegistro.submit();
    }else{
        return;
    }


});