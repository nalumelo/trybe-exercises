let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//ex 1
console.log('Bem-vinda, ' + info.personagem);

//ex 2
info['recorrente'] = 'sim';
console.log(info);

//ex 3
for (let key in info) {
  console.log(key);
}
