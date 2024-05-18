const calcularINSS = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda")

let salario = 2400.64

console.log(calcularINSS(salario))
console.log(calcularImpostoRenda(salario))