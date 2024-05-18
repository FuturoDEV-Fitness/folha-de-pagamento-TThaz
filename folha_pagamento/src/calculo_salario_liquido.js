const calcularINSS = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda")



function calcSalarioLiquido(salario) {

    let descontoINSS = Number(calcularINSS(salario))
    let descontoIR = Number(calcularImpostoRenda(salario))

    console.log(`Salário inicial: ${salario}`)
    console.log(`Desconto INSS: ${descontoINSS}`)
    console.log(`Desconto IR: ${descontoIR}`)

    let salarioLiquido = (salario - (descontoINSS + descontoIR)).toFixed(2)
    // console.log(salarioLiquido)

    console.log(`Salário liquido: ${salarioLiquido}`)
    return salarioLiquido
}

module.exports = calcSalarioLiquido