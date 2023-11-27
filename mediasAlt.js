let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a serem inseridos:"));

let soma = 0;

for (let i = 1; i <= quantidadeNumeros; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "° número:"));
    soma += numero;
}


let media = soma / quantidadeNumeros;

alert("A soma dos números é: " + soma + " e a média dos números é: " + media);
window.location.href ="index.html";