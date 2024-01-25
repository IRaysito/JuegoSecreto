let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// console.log(numeroSecreto)


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log(listaNumerosSorteados.includes(numeroGenerado))
    /* Si ya sorteamos todos los números*/
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    } else {
        /* Si el número generado está incluido en la lista */
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;    
        }
    }
}
    

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (numeroDeUsuario);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute("disabled")
    } else if (numeroDeUsuario > numeroSecreto) {
        //El usuario no asertó.
         asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    return; 
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
    return;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    return;
}

reiniciarJuego();



