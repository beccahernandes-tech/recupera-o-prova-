const entrada = require("readline-sync");

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento");

const nome = entrada.question("Digite seu nome: \n");
const valor = entrada.questionFloat("Digite qual foi o valor dos materiais: \n");
const horas = entrada.questionInt("Qauntas foram as horas de servico?");

const maoObra = calcularMaoDeObra(horas);
const total = calcularTotal(valor, horas);
const desconto = verificarDesconto(total);

console.log(" == RELATORIO DE ORGAMENTO ==");
console.log(`Cliente : ${nome}`);
console.log(`Mao de Obra ${maoObra}`);
console.log(`Pecas: ${valor}`);
console.log(`Desconto: ${desconto}`);
console.log(`Total: ${total}`);

