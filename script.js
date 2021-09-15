let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sorting(x) {
  let storage = 0; //przechowuje najmniejsza wartość
  for (i = 0; i < x.length; i++) {

    storage = x[i]; //przypisanie indeksu wartości

    let j = i - 1;

    while (j >= 0 && x[j] > storage) {//porównanie dwóch wartości i indexów
      x[j + 1] = x[j]; //zamiana miejscami

      j = j - 1;
    }
    x[j + 1] = storage; //przypisanie nowego elementu
  }
  return storage;
}

sorting(table);

console.log(table);