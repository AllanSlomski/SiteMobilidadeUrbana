const tipoVeiculo = document.getElementById("tipoVeiculo");
const kmPorDia = document.getElementById("kmPorDia");
const valorCO2 = document.getElementById("valorCO2");
const btn = document.getElementById("CalcularCo2");

btn.addEventListener('click', calcular);
    function calcular() {
        var co2emitido = 0;
        switch (tipoVeiculo.value){
            case 'motos':
                co2emitido = kmPorDia * 0.6;
                break;
            case 'carros': 
                co2emitido = kmPorDia * 0.9;
                break;
            case 'caminhoes':
                co2emitido = kmPorDia * 1.3;
                break;
            default:
                co2emitido = 0;
                break;
        }
        valorCO2.innerText = co2emitido;
    }