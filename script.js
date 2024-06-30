var  valorCO2 = document.querySelector("#valorCO2");

document.getElementById('CalcularCo2').addEventListener('click', function() {
    // Obter os valores dos inputs
    var tipoVeiculo = document.getElementById('tipoveiculo').value;
    var kmPorDia = document.getElementById('kmPorDia').value;

    // Fatores de emissão de CO2 por km para cada tipo de veículo
    var fatoresEmissao = {
        motos: 0.09,  // 0.09 kg CO2 por km
        carros: 0.21, // 0.21 kg CO2 por km
        caminhoes: 0.55 // 0.55 kg CO2 por km
    };

    // Calcular a emissão de CO2
    var emissaoCO2 = kmPorDia * fatoresEmissao[tipoVeiculo];

    // Atualizar o texto do elemento <span id="valorCO2">
    document.getElementById('valorCO2').textContent = emissaoCO2.toFixed(2);
});