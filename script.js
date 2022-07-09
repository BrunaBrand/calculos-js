// document.write(CalcularSoma())

// function CalcularSoma() {
//   let resultado = 0

//   return 'O resultado da soma é: ' + resultado
// }

function summ() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const sum = n1 + n2
  var rest = 0
  if (sum % 2 == 0) {
    rest = ' é par '
  } else {
    rest = ' é ímpar '
  }
  let sumResult = document.getElementById('result')
  let result = 'O resultado da soma é: ' + sum + '' + rest + check(n1, n2)
  sumResult.innerHTML = result
}

function subb() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const sub = n1 - n2
  let subResult = document.getElementById('result')
  let result = 'O resultado da subtração é: ' + sub + check(n1, n2)
  subResult.innerHTML = result
}

function multii() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const multi = n1 * n2
  let multiResult = document.getElementById('result')
  let result = 'O resultado da multiplicação é: ' + multi + check(n1, n2)
  multiResult.innerHTML = result
}

function divv() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const div = n1 / n2
  let divResult = document.getElementById('result')
  let result = 'O resultado da divisão é: ' + div + check(n1, n2)
  divResult.innerHTML = result
}

function restdivv() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const restDiv = n1 % n2
  let restDivResult = document.getElementById('result')
  let result = 'O resto da divisão é: ' + restDiv + check(n1, n2)
  restDivResult.innerHTML = result
}

function check(n1, n2) {
  if (n1 === n2) {
    return ', e os números inseridos são iguais'
  } else {
    return ', e os números inseridos são diferentes'
  }
}
