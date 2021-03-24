let a = 14;
let b = 7;
let soma = a + b;
let subt = a - b;
let mult = a * b;
let divi = a / b;
let modu = a % b;
let c = 11;

console.log(soma, subt, mult, divi, modu);

if (a>b) {
    console.log("a é maior")
} else {
    console.log("b é maior")
}

if (a>b && a>c){
    console.log("a é o maior")
} else if (b>a && b>c) {
    console.log("b é o maior")
} else if (c>a && c>b) {
    console.log("c é o maior")
} else {
    console.log("erro")
}

if (a>0){
    console.log("positivo")
} else if (a<0){
    console.log("negativo")
} else {
    console.log("zero")
}