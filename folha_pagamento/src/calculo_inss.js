function calcularINSS(salarioBruto) {

    let salario = Number(salarioBruto)
    let aliquota = 0

    if(salario <= 1412.00) {
        aliquota = 7.5
    } 
    else if (salario >= 1412.01 && salario <= 2666.68) {
        aliquota = 9
    }
    else if (salario >= 2666.69 && salario <= 4000.03) {
        aliquota = 12
    }
    else if (salario >= 4000.04 && salario <= 7786.02) {
        aliquota = 14
    }
    let calculoINSS = salario * (aliquota / 100)
    
    if(calculoINSS > 908.85) {
        calculoINSS = 908.85
    }

    // console.log(`O quanto você perdeu esse mês é: ${(calculoINSS).toFixed(2)}`)
    return (calculoINSS).toFixed(2)
}
    module.exports = calcularINSS