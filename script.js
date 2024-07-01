const tipoVeiculo = document.getElementById("tipoVeiculo");
const kmPorDia = document.getElementById("kmPorDia");
const valorCO2 = document.getElementById("valorCO2");
const btn = document.getElementById("CalcularCo2");

btn.addEventListener('click', calcular);
    function calcular() {
        let co2emitido = 0;
        switch (tipoVeiculo.value){
            case 'motos':
                co2emitido = kmPorDia.value * 0.07;
                break;
            case 'carros': 
                co2emitido = kmPorDia.value * 0.096;
                break;
            case 'caminhoes':
                co2emitido = kmPorDia.value * 1.3;
                break;
            default:
                co2emitido = 0;
                break;
        }
        valorCO2.innerText = co2emitido.toFixed(2);
    }