// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let inputAmigo = document.querySelector("input");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    let nuevoAmigo = inputAmigo.value;
    if (nuevoAmigo == ""){
        alert('Por favor, inserte un nombre.')
    } else{
        amigos.push(nuevoAmigo);
        crearLista();
    }
    inputAmigo.value = "";
    resultado.innerHTML = "";
    return;
}

function  crearLista(){
    listaAmigos.innerHTML = "";
    for ( i = 0 ; i < amigos.length ; i++ ){
        let amigo = document.createElement("li")
        amigo.innerHTML = amigos[i];
        listaAmigos.appendChild(amigo);
    }  
}

function sortearAmigo(){
    if ( amigos.length <= 1 ){
        listaAmigos.innerHTML = "";
        alert('No has ingresado suficientes amigos. Vuelve a intentarlo.');
    }else{
        let numRandom = Math.floor(Math.random() * amigos.length);
        let amigoRandom = amigos[numRandom];
        resultado.innerHTML = amigoRandom;
    }    
    return amigos = [];
}

