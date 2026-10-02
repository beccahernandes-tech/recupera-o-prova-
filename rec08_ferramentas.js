const entrada = require("readline-sync");

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`Ferramenta cadastrada ${i + 1}`);

    const nome = entrada.question("Nome da Ferramenta: \n");
    const quantidade = entrada.questionInt("Quantidade em estoque: \n");
    const estoqueMinimo = entrada.questionInt("Estoque minimo: \n ");

    const novaferramentas = {
        nome,
        quantidade,
        estoqueMinimo
    };

    ferramentas.push(novaferramentas);
}

console.log(" \n == RELATORIO DO ESTOQUE == ");

for (let i = 0; i < ferramentas.length; i++) {
    const item = ferramentas[i];

    console.log(`\n Componentes: ${item.nome}`);
    console.log(`\n Quantidade: ${item.quantidade}`);
    console.log(`\n Estoque minimo: ${item.estoqueMinimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situação: REPOR");
    } else {
        console.log("Situacao: ESTOQUE SUFICIENTE");
    }
}