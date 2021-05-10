const statesList = document.getElementById('select-estado');
function selectState() {
const states = ['Selecione seu estado','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RR','RO','RJ','RN','RS','SC','SP','SE','TO'];
  for (let index = 0; index < states.length; index += 1) {
      const statesOp = document.createElement('option');
      statesList.appendChild(statesOp).innerText = states[index];
      statesList.appendChild(statesOp).value = states[index];
  }
}

selectState();

document.getElementById('input-data').DatePickerX.init();