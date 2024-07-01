let tipoVeiculo = document.querySelector("#tipoveiculo");
let kmPorDia = document.querySelector("#kmPorDia");
const valorCO2 = document.querySelector("#valorCO2");
const btn = document.querySelector("#CalcularCo2");

btn.addEventListener('click', calcular);
    function calcular() {
        valorCO2.style.color = 'blue';
    }