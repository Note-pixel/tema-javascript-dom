function mostrarMensagem() {
    const texto = "Bem-vindo ao estudo de funções em JavaScript!";
    console.log(texto);
    document.getElementById("res-ex1").textContent = texto;
}

function somaSimples() {
    const a = 4;
    const b = 6;
    const total = a + b;
    console.log(total);
    document.getElementById("res-ex2").textContent = `Resultado da soma fixa: ${total}`;
}

function imprimirNome() {
    const nomePadrao = "Lucas Silva";
    console.log(nomePadrao);
    document.getElementById("res-ex3").textContent = `Nome registrado: ${nomePadrao}`;
}

function quadrado(num) {
    return num * num;
}

function converterParaCelsius(f) {
    return (f - 32) * 5 / 9;
}

function concatenaPalavras(txt1, txt2) {
    return txt1 + " " + txt2;
}

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function desconto(valor, taxaDesconto) {
    const abatimento = (valor * taxaDesconto) / 100;
    return valor - abatimento;
}

function saudacaoPersonalizada(nomeUsuario) {
    const mensagemCompleta = `Olá, ${nomeUsuario}! Seja bem-vindo.`;
    console.log(mensagemCompleta);
    document.getElementById("res-ex9").textContent = mensagemCompleta;
}

const multiplicar = function(x, y) {
    return x * y;
};

const dividir = function(x, y) {
    return x / y;
};

const dobro = n => n * 2;

const ehPar = n => n % 2 === 0;

function calculadora(n1, n2) {
    function soma(x, y) { 
        return x + y; 
    }
    function subtrair(x, y) { 
        return x - y; 
    }

    const resultadoFinal = `Soma deu ${soma(n1, n2)} e a Subtração deu ${subtrair(n1, n2)}`;
    console.log(resultadoFinal);
    document.getElementById("res-ex14").textContent = resultadoFinal;
}

function operacoesAvancadas(base, expoente) {
    function calcularProduto(x, y) { 
        return x * y; 
    }
    function calcularPotencia(x, y) { 
        return x ** y; 
    }

    return {
        produto: calcularProduto(base, expoente),
        potencia: calcularPotencia(base, expoente)
    };
}

mostrarMensagem();
somaSimples();
imprimirNome();

document.getElementById("res-ex4").textContent = `Resultado: ${quadrado(9)}`;
document.getElementById("res-ex5").textContent = `${converterParaCelsius(98).toFixed(1)} °C`;
document.getElementById("res-ex6").textContent = concatenaPalavras("Desenvolvimento", "Web");

const mediaCalculada = calcularMedia(8.5, 7.0, 9.2);
document.getElementById("res-ex7").textContent = `Média final: ${mediaCalculada.toFixed(2)}`;
document.getElementById("res-ex8").textContent = `R$ ${desconto(250, 10).toFixed(2)}`;
saudacaoPersonalizada("Amanda Rodrigues");

document.getElementById("res-ex10").textContent = `Resultado: ${multiplicar(8, 7)}`;
document.getElementById("res-ex11").textContent = `Resultado: ${dividir(100, 4)}`;

document.getElementById("res-ex12").textContent = `O dobro de 64 é ${dobro(64)}`;
document.getElementById("res-ex13").textContent = `O número 15 é par? ${ehPar(15) ? 'Sim' : 'Não'}`;

calculadora(25, 11);

const dadosAvancados = operacoesAvancadas(5, 3);
document.getElementById("res-ex15").textContent = `Multiplicação: ${dadosAvancados.produto} | Potência: ${dadosAvancados.potencia}`;
