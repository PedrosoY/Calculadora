function somar(){
    var tn1 = window.document.getElementById('textn1')
    var tn2 = window.document.getElementById('textn2')
    var resSo = window.document.getElementById('resSo')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    resSo.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
function subtrair(){
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var resSu = window.document.getElementById('resSu')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var su = n3 - n4
    resSu.innerHTML = `A subtração entre ${n3} e ${n4} é igual a <strong>${su}</strong>`
}
function multiplicar(){
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.getElementById('txtn6')
    var resMu = window.document.getElementById('resMu')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var m = n5 * n6
    resMu.innerHTML = `A multiplicação entre ${n5} e ${n6} é igual a <strong>${m}</strong>`
}
function dividir(){
    var tn7 = window.document.getElementById('txtn7')
    var tn8 = window.document.getElementById('txtn8')
    var resDi = window.document.getElementById('resDi')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var d = n7 / n8
    resDi.innerHTML = `A divisão entre ${n7} e ${n8} é igual a <strong>${d}</strong>`
}
