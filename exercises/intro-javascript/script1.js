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
let peca;
return peca.toLowerCase()