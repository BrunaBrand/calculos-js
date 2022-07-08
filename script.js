function Calcular() {
  let n1 = document.getElementById('valor1').value
  let n2 = document.getElementById('valor2').value

  n1 = Number(n1)
  n2 = Number(n2)

  const sum = n1 + n2
  const sub = n1 - n2
  const multi = n1 * n2
  const div = n1 / n2
  const restDiv = n1 % n2

  alert('Soma: ' + sum)
  alert('Subtração: ' + sub)
  alert('Multiplicação: ' + multi)
  alert('Divisão: ' + div)
  alert('Resto da divisão: ' + restDiv)

  if (sum % 2 == 0) {
    alert('A soma dos 2 é : ' + sum + ' é par')
  } else {
    alert('A soma dos 2 é : ' + sum + ' é ímpar')
  }

  if (n1 === n2) {
    alert('os números inseridos são iguais')
  } else {
    alert('os números inseridos são diferentes')
  }
}
