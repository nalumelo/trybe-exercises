// 1
const newPerson = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(newPerson));

// 2
const checkNumber = (number, luckyNumber) => number === luckyNumber;

const checkResult = (number, callback) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  return callback(number, luckyNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(checkResult(3, checkNumber));