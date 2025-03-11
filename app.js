// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let totalAmigos = [];

function agregarAmigo(){
    let amigos = document.getElementById('amigo').value; 

    if( amigos == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        totalAmigos.push(amigos);
        console.log(totalAmigos);

        document.getElementById('amigo').value = "";
        document.getElementById('listaAmigos').innerText = `Amigos: \n ${totalAmigos.join("\n ")}`;
    }
}


