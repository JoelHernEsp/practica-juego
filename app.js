let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero. En ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor.');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    return;
}

function nuevoJuego(){
    //limpiar la caja
    limpiarCaja();
    //Generar nuevo numero
    //Indicar el texto inicial
    //reiniciar los intentos
    condicionesIniciales();
    //deshabilitar el boton 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return ;
}

function generarNumeroSecreto(){
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(listanumerosSorteados);

    //si ya se sortearon todos los numeros
    if(listanumerosSorteados.length == numeroMaximo/2){
        asignarTextoElemento('p','Dominaste el juego.');
        document.querySelector('#intentar').setAttribute('disabled','true');
    }else{
        //Si el numero generado esta en la lista
        if(listanumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listanumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

condicionesIniciales();


