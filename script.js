function mostrarMensagem() {
    const msg = "Bem-vindo ao estudo de funções em JavaScript!";
    console.log(msg);
    document.getElementById("res1").innerText = msg;
}

function somaSimples() {
    const num1 = 4;
    const num2 = 6;
    const resultado = num1 + num2;
    console.log(resultado);
    document.getElementById("res2").innerText = `Resultado da soma: ${resultado}`;
}

function imprimirNome() {
    const nome = "JavaScript";
    console.log(nome);
    document.getElementById("res3").innerText = `Nome: ${nome}`;
}

function quadrado(numero) {
    return numero * numero;
}

function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function concatenaPalavras(str1, str2) {
    return `${str1} ${str2}`;
}

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function desconto(valorProduto, percentualDesconto) {
    const valorDoDesconto = (valorProduto * percentualDesconto) / 100;
    return valorProduto - valorDoDesconto;
}

function saudacaoPersonalizada(nome) {
    const msg = `Olá, ${nome}! Seja bem-vindo.`;
    console.log(msg);
    document.getElementById("res9").innerText = msg;
}

const multiplicar = function(a, b) {
    return a * b;
};

const dividir = function(a, b) {
    return a / b;
};

const dobro = (numero) => numero * 2;

const ehPar = (numero) => numero % 2 === 0;

function calculadora(num1, num2) {
    function soma(x, y) { return x + y; }
    function subtrair(x, y) { return x - y; }

    const resultadoTxt = `Soma: ${soma(num1, num2)} | Subtração: ${subtrair(num1, num2)}`;
    console.log(resultadoTxt);
    document.getElementById("res14").innerText = resultadoTxt;
}

function operacoesAvancadas(num1, num2) {
    function calcularProduto(x, y) { return x * y; }
    function calcularPotencia(x, y) { return Math.pow(x, y); }

    return {
        produto: calcularProduto(num1, num2),
        potencia: calcularPotencia(num1, num2)
    };
}

mostrarMensagem();
somaSimples();
imprimirNome();

document.getElementById("res4").innerText = `Quadrado: ${quadrado(5)}`;
document.getElementById("res5").innerText = `Celsius: ${converterParaCelsius(77).toFixed(1)}°C`;
document.getElementById("res6").innerText = `Frase: "${concatenaPalavras("Olá,", "Mundo!")}"`;

document.getElementById("res7").innerText = `Média: ${calcularMedia(7, 8, 9).toFixed(1)}`;
document.getElementById("res8").innerText = `Valor final com desconto: R$ ${desconto(100, 15)}`;
saudacaoPersonalizada("Carlos");

document.getElementById("res10").innerText = `Multiplicação: ${multiplicar(6, 7)}`;
document.getElementById("res11").innerText = `Divisão: ${dividir(20, 4)}`;

document.getElementById("res12").innerText = `Dobro: ${dobro(15)}`;
document.getElementById("res13").innerText = `8 é par? ${ehPar(8)} | 7 é par? ${ehPar(7)}`;

calculadora(10, 5);

const objResultado = operacoesAvancadas(2, 3);
document.getElementById("res15").innerText = `Produto: ${objResultado.produto} | Potência: ${objResultado.potencia}`;
