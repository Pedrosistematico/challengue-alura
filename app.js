// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let totalAmigos = [];

function agregarAmigo(){
    let amigos = document.getElementById('amigo').value; 

    if( amigos === ""){
        alert("Por favor, inserte un nombre.");
    }else{
        totalAmigos.push(amigos);
        console.log(totalAmigos);

        document.getElementById('amigo').value = "";
        document.getElementById('listaAmigos').innerText = `Amigos: \n ${totalAmigos.join("\n ")}`;
    }
}

function sortearAmigo(){
    if (totalAmigos.length === 0) {
        document.getElementById("listaAmigos").innerHTML = "No hay amigos en la lista.";
        return;
    }

    let numeroSorteado = Math.floor(Math.random()*totalAmigos.length);
    let nombreSorteado = totalAmigos[numeroSorteado];

    document.getElementById("listaAmigos").innerHTML = `Tu amigo secreto es ${nombreSorteado}`;
    totalAmigos.splice(numeroSorteado, 1);
}

