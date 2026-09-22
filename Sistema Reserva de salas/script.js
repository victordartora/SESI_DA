let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function reservar() {

    let nome = document.getElementById("nome").value;
    let sala = document.getElementById("sala").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    if (nome == "" || data == "" || hora == "") {
        alert("Preencha todos os campos!");
        return;
    }

    reservas.push({
        nome: nome,
        sala: sala,
        data: data,
        hora: hora
    });

    localStorage.setItem("reservas", JSON.stringify(reservas));

    mostrar();
}

function mostrar() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < reservas.length; i++) {

        lista.innerHTML += `
            <p>
                <b>${reservas[i].nome}</b> -
                ${reservas[i].sala} -
                ${reservas[i].data} -
                ${reservas[i].hora}

                <button onclick="excluir(${i})">
                    Excluir
                </button>
            </p>
        `;
    }
}

function excluir(i) {

    reservas.splice(i, 1);

    localStorage.setItem("reservas", JSON.stringify(reservas));

    mostrar();
}

mostrar();