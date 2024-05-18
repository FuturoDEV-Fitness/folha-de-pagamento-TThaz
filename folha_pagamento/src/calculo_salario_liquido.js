const calcularINSS = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda")

function calcSalarioLiquido(salario) {

    let descontoINSS = Number(calcularINSS(salario))
    let descontoIR = Number(calcularImpostoRenda(salario))

    let salarioLiquido = (salario - (descontoINSS + descontoIR)).toFixed(2)
    return salarioLiquido
}

module.exports = calcSalarioLiquido