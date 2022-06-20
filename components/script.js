const seleccionCompuMostrar = document.getElementById("computerChoice")

let seleccionUsuarioMostrar = document.getElementById("userChoice")

const resultadoMostrar = document.getElementById("resultado")

const eleccionesPosibles = document.querySelectorAll(".boton")

let seleccionUsuario
let seleccionCompu
let resultado

eleccionesPosibles.forEach(eleccionesPosibles => eleccionesPosibles.addEventListener("click", (e) => {
   seleccionUsuario = e.target.id
   seleccionUsuarioMostrar.innerHTML = seleccionUsuario
   generarEleccionComputadora()
    obtenResultado()
}))


function generarEleccionComputadora(){
    const nroAzar = Math.floor(Math.random() *3)
        
    if (nroAzar === 0) {
        seleccionCompu = "piedra"
    }

    if (nroAzar === 1) {
        seleccionCompu = "papel"
    }

    if (nroAzar === 2) {
        seleccionCompu = "tijera"
    }
    seleccionCompuMostrar.innerHTML = seleccionCompu
}

function obtenResultado(){
    if (seleccionCompu === seleccionUsuario){
    resultado = "empataron!"
    }

    if (seleccionCompu === "piedra" && seleccionUsuario === "papel"){
    resultado = "ganaste!"}

    if (seleccionCompu === "piedra" && seleccionUsuario === "tijera"){
    resultado = "gana la compu!"
    }

    if (seleccionCompu === "papel" && seleccionUsuario === "tijera"){
    resultado = "ganaste!"
    }

    if (seleccionCompu === "papel" && seleccionUsuario === "piedra"){
    resultado = "gana la compu!"
    }

    if (seleccionCompu === "tijera" && seleccionUsuario === "piedra"){
    resultado = "ganaste!"
    }

    if (seleccionCompu === "tijera" && seleccionUsuario === "papel"){
    resultado = "gana la compu!"
    }
    resultadoMostrar.innerHTML = resultado
}











