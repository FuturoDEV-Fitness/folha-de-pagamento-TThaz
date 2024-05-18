const fs = require('fs')
const PDFDocument = require('pdfkit')
const doc = new PDFDocument();


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

                input.question("Deseja gerar um PDF? (S ou N): ", (valorDigitado => {
                    if(valorDigitado == "S" || valorDigitado == "s") {
                        doc.pipe(fs.createWriteStream("Holerite.pdf"));
                        doc.fontSize(16)

                        doc.text("--- Folha de Pagamento ---\n")
                        doc.text(`Nome: ${nomeDigitado}`)
                        doc.text(`CPF: ${cpfDigitado}`)
                        doc.text("--------------------------")
                        doc.text(`Salário Bruto: R$ ${salarioBruto}`)
                        doc.text(`Desconto INSS: R$ ${calcularINSS(salarioBruto)}`)
                        doc.text(`Desconto IR: R$ ${calcularImpostoRenda(salarioBruto)}`)
                        doc.text(`Salário Liquido: R$ ${calcSalarioLiquido(salarioBruto)}`)
                        doc.end()
                    } else {
                        console.log("PDF não criado")
                    }
                    input.close()
                }))

            })
        })
    })
})