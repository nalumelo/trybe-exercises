let a = 70;
let b = 50;
let soma = a + b;
let subt = a - b;
let mult = a * b;
let divi = a / b;
let modu = a % b;
let c = 60;

//ex.1
console.log(soma, subt, mult, divi, modu);

//ex.2
if (a>b) {
    console.log("a é maior")
} else {
    console.log("b é maior")
}

//ex. 3
if (a>b && a>c){
    console.log("a é o maior")
} else if (b>a && b>c) {
    console.log("b é o maior")
} else if (c>a && c>b) {
    console.log("c é o maior")
} else {
    console.log("erro")
}

//ex. 4
if (a>0){
    console.log("positivo")
} else if (a<0){
    console.log("negativo")
} else {
    console.log("zero")
}

//ex.5
if (a+b+c == 180){
    console.log(true)
} else {
    console.log(false)
}

//ex 6
let peca = "PAWN";
let mov;

switch (peca.toLowerCase()){
    case "king":
        mov = "Rei: vertical, horizontal e diagonal"
        console.log(mov)
        break;
    case "queen":
        mov = "Rainha: vertical, horizontal e diagonal"
        console.log(mov)
        break;
    case "bishop":
        mov = "Bispo: apenas diagonal"
        console.log(mov)
        break;
    case "knight":
        mov = "Cavalo: forma de L"
        console.log(mov)
        break;
    case "rook":
        mov = "Torre: vertical e horizontal"
        console.log(mov)
        break;
    case "pawn":
        mov = "Peão: frente e diagonal*"
        console.log(mov)
        break;
}

//ex 7
let suaNota = 45;

if (suaNota < 0 || suaNota > 100) {
    console.log("Nota inválida")
} else if (suaNota >=90) {
    console.log("A")
} else if (suaNota >=80) {
    console.log("B")
} else if (suaNota >= 70) {
    console.log("C")
} else if (suaNota >= 60) {
    console.log("D")
} else if (suaNota >= 50) {
    console.log("E")
} else {
    console.log("F")
}