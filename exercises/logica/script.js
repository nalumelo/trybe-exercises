//ex 1
let n = 5;
for (let i = 0; i < n; i += 1) {
  let carac = "";
  for (let j = 0; j < n; j += 1) {
    carac += "*";
  }
  console.log(carac);
}

//ex 2
for (let i = 0; i < n; i += 1) {
    let carac ="";
    for (let j = 0; j <= i; j += 1) {
      carac += "*";
    }
    console.log(carac);
}