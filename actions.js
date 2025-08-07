const temas = [
    "Tienda Santa Fe",
    "Tienda Fontanar",
    "Tienda Centro Chia",
    "Tienda Palatino"
];

let temaActual = 0;

function cambiartema() {
    //const parrafos = document.querySelectorAll('p');
    const elParrafo = document.querySelector('.otro-parrafo');
    temaActual = (temaActual + 1) % temas.length;
    elParrafo.innerHTML = temas[temaActual];
}