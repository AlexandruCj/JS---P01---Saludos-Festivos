const formnulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formnulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const edad = Number(document.querySelector("#edad").value);

    let mensaje = `Hola ${nombre} !<br>Brindemos con `;
    let emoji;

    if (edad < 18) {
        emoji = "🥛";
    } else {
        emoji = "🍺";
    }

    for (let i = 0; i < edad; i++) {
        mensaje += emoji;
    }

    resultado.innerHTML = mensaje;

})