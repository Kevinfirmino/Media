let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("qual a nota da primeira prova?")
let n2 = prompt("qual a nota da segunda prova?")
let n3= prompt("qual a nota da teceira prova?")


let averege = (Number(n1) + Number(n2) + Number(n3) / 3) 

let result = averege > 6 

averege = averege.toFixed(2)

if (result) {
    alert("Parabéns," + student + "! sua media foi de: " + averege)
} else {
     alert(student + " estude para sua prova de recuperação! Sua media foi de;" + averege)
}

alert(result)