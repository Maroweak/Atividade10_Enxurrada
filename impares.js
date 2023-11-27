let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro (maior que o primeiro):"));

if (num1 >= num2) {
    console.log("Erro: O segundo número deve ser maior que o primeiro.");
} else {

    let somaImpares = 0;

  
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            somaImpares += i;
        }
    }


    alert("A soma dos números ímpares no intervalo [" + num1 + ", " + num2 + "] é: " + somaImpares);
    window.location.href ="index.html";
}


