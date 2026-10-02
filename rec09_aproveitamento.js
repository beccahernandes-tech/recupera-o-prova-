const entrada = require("readline-sync");

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75 && percentual <= 89.99 ){
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const quantidadeUtil = entrada.questionInt("Qual e a quantidade util de materia prima? \n");
const quantidadeTotal = entrada.questionInt("Qual e a quantidade total das materias primas? \n");

const eficiencia = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacoes = classificarAproveitamento(eficiencia);

console.log("\n == RELATORIO DE EFICIENCIA ==");
console.log(`Produção prevista: ${quantidadeUtil}`);
console.log(`Produção real: ${quantidadeTotal}`);
console.log(`Eficiência: ${eficiencia.toFixed(2)}`);
console.log(`Classificação: ${classificacoes}`);
