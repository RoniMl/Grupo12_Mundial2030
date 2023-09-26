let validarCompartir = document.getElementById("formularioCompartir")
let msgError = document.getElementById("msgError")

validarCompartir.addEventListener("submit", function(e){
    e.preventDefault();
    
    let autor = document.getElementById("autor")
    let obra = document.getElementById("obra")
    let origen = document.getElementById("origen")
    
    msgError = ""

    if (!autor.value || !obra.value || !origen.value){

        msgError.innerText = "Debe completar todos los campos antes de reenviar el formulario"
        alert("Debe completar todos los campos antes de reenviar el formulario")
        
        return; 
    } else{
        alert("Se envio con éxito")
        validarCompartir.submit()
    }

});