function calcularFaixaEtaria() {
    
    const idades = [
        parseInt(document.getElementById('idade1').value),
        parseInt(document.getElementById('idade2').value),
        parseInt(document.getElementById('idade3').value),
        parseInt(document.getElementById('idade4').value),
        parseInt(document.getElementById('idade5').value)
    ];

    
    const faixas = {
        'Faixa Etária 1': 0, 
        'Faixa Etária 2': 0, 
        'Faixa Etária 3': 0  
    };

    
    idades.forEach(idade => {
        if (idade <= 15) {
            faixas['Faixa Etária 1']++;
        } else if (idade <= 40) {
            faixas['Faixa Etária 2']++;
        } else {
            faixas['Faixa Etária 3']++;
        }
    });

       const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        Faixa Etária 1: ${faixas['Faixa Etária 1']}<br>
        Faixa Etária 2: ${faixas['Faixa Etária 2']}<br>
        Faixa Etária 3: ${faixas['Faixa Etária 3']}
    `;
}
