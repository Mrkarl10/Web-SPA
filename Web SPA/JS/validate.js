const form = document.getElementById("formulario")
const rutImput = document.getElementById("rut-cliente")
const nombreImput = document.getElementById("nombre-cliente")
const apellidoImput = document.getElementById("apellido-cliente")
const correoImput = document.getElementById("correo-cliente")
const telefonoImput = document.getElementById("telefono-cliente")

form.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault()

    if(nombreImput.value === "" || apellidoImput.value === "" || correoImput.value === "" || telefonoImput.value === ""){

        alert("¡Todos los campos son requeridos!")

    } else {
        alert("Formulario enviado correctamente, Gracias por contactarnos")
    }

    form.reset()
}