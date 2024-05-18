const calcSalarioLiquido = require("./calculo_salario_liquido");
const calcularINSS = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Qual seu nome?: ", (nomeDigitado) => {
    input.question("Qual seu CPF?: ", (cpfDigitado) => {
        input.question("Qual o mês do pagamento? (Em número do mês): ", (mesDigitado) => {
            input.question("Insira o valor do salário bruto: ", (salarioBruto) => {

                console.log("\n--- Folha de Pagamento ---\n")
                console.log(`Nome: ${nomeDigitado}`)
                console.log(`CPF: ${cpfDigitado}`)
                console.log("--------------------------")
                console.log(`Salário Bruto: R$ ${salarioBruto}`)
                console.log(`Desconto INSS: R$ ${calcularINSS(salarioBruto)}`)
                console.log(`Desconto IR: R$ ${calcularImpostoRenda(salarioBruto)}`)
                console.log(`Salário Liquido: R$ ${calcSalarioLiquido(salarioBruto)}`)
                console.log("--------------------------")

                input.close()
            })
        })
    })
})

// Agora, crie um programa que peça o nome do funcionário, CPF, o mês do pagamento (Numérico) e o salário bruto.

// De posse dessas informações, faça o cálculo do salário líquido e exiba no terminal no seguinte formato:

// image.png

// Use as funções implementadas na questão 1 e 2.