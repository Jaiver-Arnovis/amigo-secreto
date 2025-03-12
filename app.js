let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // valor cero en la entrada
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    let resultado = document.getElementById("resultado");
// mensaje si se acaban los amigos para sortear
    if (amigos.length === 0) {
        alert("No hay más amigos para sortear.");
        resultado.innerHTML = "<li>Todos los amigos han sido sorteados.</li>";
        return;
    }




    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos.splice(indiceAleatorio, 1)[0]; 


// Elimina el amigo sorteado de la lista 

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
    actualizarLista();
}
