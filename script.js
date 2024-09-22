

document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (altura > 0) {
        const imc = peso / (altura * altura); 
        let categoria;

        
        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidade";
        }

        document.getElementById('resultado-imc').innerText = `Seu IMC é: ${imc.toFixed(2)} - ${categoria}`;
    } else {
        document.getElementById('resultado-imc').innerText = 'Por favor, insira uma altura válida.';
    }
});