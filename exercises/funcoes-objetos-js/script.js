// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// //ex 1
// console.log('Bem-vinda, ' + info.personagem);

// //ex 2
// info['recorrente'] = 'Sim';
// console.log(info);

// //ex 3
// for (let key in info) {
//   console.log(key);
// }

// //ex 4
// for (let key in info) {
//   console.log(info[key]);
// }

// //ex 5
// let info2 = {
//  personagem: 'Tio Patinhas',
//  origem:  "Christmas on Bear Montain, Dell's Four Color Comics #178",
//  nota: 'O último MacPatinhas',
//  recorrente: 'Sim',
// }

// for (let key in info) {
//     if (info[key] === info.recorrente && info.recorrente === 'Sim' && info2.recorrent === 'Sim') {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[key] + ' e ' + info2[key]);
//     }
// }

//funcoes
//ex 1
function palindrome(string) {
    let reverse = string.split('').reverse().join('');
    let isPalindrome = true;
    if (reverse === string) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

palindrome('abelha');

//ex 2
function indiceDoMaior(numeros) {
  let maiorIndex = 0;
  for (let index in numeros) {
    if (numeros[maiorIndex] < numeros[index]) {
      maiorIndex = index;
    }
  }
  return console.log(maiorIndex);
}

indiceDoMaior([2,3,4,7,10,1]);