const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre", "Mélodie", "Jonathan", "Laure"];

const uniqueSet = new Set(prenoms);

const newPrenoms = Array.from(uniqueSet);
console.log(newPrenoms);

console.log(newPrenoms.join(", "));