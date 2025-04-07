
// Validacion de datos personales

const nameInput = document.getElementById("name");
const apellidoInput = document.getElementById("apellido");
const phoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");
const aceptar = document.getElementById ("aceptar");
const aceptarCheck = document.getElementById("terminos");
const form = document.getElementById("form");
const buttonBorrar = document.getElementById("reset");


function resetForm() {
    nameInput.value = ""
    apellidoInput.value = ""
    phoneInput.value = ""
    emailInput.value = ""
    nameInput.classList.remove("valido")
    nameInput.classList.remove("invalido")
    apellidoInput.classList.remove("valido")
    apellidoInput.classList.remove("invalido")
    phoneInput.classList.remove("valido")
    phoneInput.classList.remove("invalido")
    emailInput.classList.remove("valido")
    emailInput.classList.remove("invalido")
    aceptar.classList.remove ("invalido")
    document.getElementById("nombreError").textContent = "" 
    document.getElementById("apellidoError").textContent = ""
    document.getElementById("telefonoError").textContent = ""
    document.getElementById("emailError").textContent = ""
    aceptarCheck.checked = false      
}

function validarNombre() {
    const nombre = nameInput.value
    const nombrePattern = /^[a-zA-Zñ\s]{1,15}$/
    if (nombrePattern.test(nombre)) {
        nameInput.classList.add ("valido");
        nameInput.classList.remove("invalido")
        document.getElementById("nombreError").textContent = ""
    }else {
        nameInput.classList.add("invalido")
        nameInput.classList.remove("valido")
        document.getElementById("nombreError").textContent = "Debe tener entre 1 y 15 caracteres y solo letras"
}}

function validarApellido() {
    const apellido = apellidoInput.value
    const apellidoPattern = /^[a-zA-Zñ\s]{1,40}$/
    if (apellidoPattern.test(apellido)) {
        apellidoInput.classList.add("valido")
        apellidoInput.classList.remove("invalido")
        document.getElementById("apellidoError").textContent = ""
        }else {
        apellidoInput.classList.add("invalido")
            apellidoInput.classList.remove("valido")
        document.getElementById("apellidoError").textContent = "Debe tener entre 1 y 40 caracteres y solo letras"
}}

function validarTelefono() {
    const telefono = phoneInput.value
    const telefonoPattern = /^[0-9]{9}$/
    if (telefonoPattern.test(telefono)) {
        phoneInput.classList.add("valido")
        phoneInput.classList.remove("invalido")
        document.getElementById("telefonoError").textContent = ""
    }else {
        phoneInput.classList.add("invalido")
        phoneInput.classList.remove("valido")
        document.getElementById("telefonoError").textContent = "El telefono debe tener como maximo 9 caracteres y solo numeros"
}}

function validarEmail() {
    const email = emailInput.value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailPattern.test(email)) {
        emailInput.classList.add("valido")
        emailInput.classList.remove("invalido")
        document.getElementById("emailError").textContent = ""
    }else {
        emailInput.classList.add("invalido")
        emailInput.classList.remove("valido")
        document.getElementById("emailError").textContent = "El email no es valido"
}};

function validarAceptacion() {

        if (aceptarCheck.checked === true) {
            aceptar.classList.add("valido");
            aceptar.classList.remove("invalido");
        } else {
            aceptar.classList.add("invalido");
            aceptar.classList.remove("valido");
        }
    };           

nameInput.addEventListener("input", validarNombre);
apellidoInput.addEventListener("input", validarApellido);
phoneInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
aceptarCheck.addEventListener("input", validarAceptacion)

form.addEventListener("submit", function(event) {
    event.preventDefault()
    validarNombre()
    validarApellido()
    validarTelefono()
    validarEmail()
    validarAceptacion()

    if (nameInput.classList.contains("valido") && apellidoInput.classList.contains("valido") && phoneInput.classList.contains("valido") && emailInput.classList.contains("valido") && aceptar.classList.contains("valido")){

        document.getElementById("mensaje").textContent = "Formulario enviado correctamente" 
        document.getElementById("mensaje-error").textContent = ""
        setTimeout(() => {
			document.getElementById('mensaje').textContent = ""
		}, 5000)
        resetForm()
    } else {
        document.getElementById("mensaje-error").textContent = "Por favor, corrija los errores en el formulario y acepta los terminos y condiciones"
        document.getElementById("mensaje").textContent = ""
    }
  });

// ----------------------- Borrar formulario --------------------------

buttonBorrar.addEventListener("click", function() {
    document.getElementById("mensaje").textContent = ""
    document.getElementById("mensaje-error").textContent = ""
    resetForm()   
    
})

// Calculo de total del presupuesto 

const servicioSelect = document.getElementById("servicio");
const extrasCheckboxes = document.querySelectorAll(".extras");
const plazo = document.getElementById("plazo");
const elementTotal = document.getElementById("pTotal")

function calcularTotal() {

    if (servicioSelect.value === "0") {
            servicioSelect.classList.add("noSelected");
            document.getElementById("noSelected").textContent = "No hay servicio seleccionado";
        } else {
            servicioSelect.classList.remove("noSelected");
            document.getElementById("noSelected").textContent = "";   
    }

    const precioSeleccionado = parseFloat(servicioSelect.value);
    let total = 0
    
    total = precioSeleccionado; 

    elementTotal.value = `${total.toFixed(2)} €`
    
// Se obtiene descuento por el plazo seleccionado y se suma al total

    const plazoSelect = Number(plazo.value);
    const discount = Number(precioSeleccionado - (plazoSelect * 0.5)); 
    total = discount;
    
    plazo.addEventListener("change", calcularTotal)
    
// Sumar el precio de los extras seleccionados
  
    const extrasSeleccionadas = document.querySelectorAll(".extras:checked");
    extrasSeleccionadas.forEach((checkbox) => {
        const precioExtra = checkbox.value;
        total += parseFloat(precioExtra);
    })

    elementTotal.value = `${total.toFixed(2)} €`
};

// Se agrega los extras seleccionados al total

    extrasCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", calcularTotal);
    })

    servicioSelect.addEventListener("change", calcularTotal)   
    elementTotal.addEventListener("change", calcularTotal)

    
    

buttonBorrar.addEventListener("click", function() {
    document.getElementById("mensaje").textContent = "";
    document.getElementById("mensaje-error").textContent = "";
    servicioSelect.classList.remove("noSelected");
    document.getElementById("noSelected").textContent = ""; 
    
    resetForm()   
    
})