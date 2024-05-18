function calcularImpostoRenda(salarioBruto) {

    let salario = Number(salarioBruto)
    let aliquota = 0
    let pagarIR = 0

    if(salario <= 2212.00) {
        pagarIR = "Isento"
    } 
    else if (salario >= 2212.01 && salario <= 2826.65) {
        aliquota = 7,5
        pagarIR = 158.40
    }
    else if (salario >= 2826.66 && salario <= 3751.05) {
        aliquota = 15
        pagarIR = 370.40
    }
    else if (salario >= 3751.06 && salario <= 4664.68) {
        aliquota = 22.5
        pagarIR = 651.73
    }
    else if (salario > 4664.68) {
        aliquota = 27.5
        pagarIR = 884.96
    }

    return pagarIR.toFixed(2)
}
    module.exports = calcularImpostoRenda