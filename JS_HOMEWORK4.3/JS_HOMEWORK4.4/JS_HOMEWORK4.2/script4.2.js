let userNumber = prompt("Enter a three number");

let a = userNumber[0];
let b = userNumber[1];
let c = userNumber[2];

if (a === b && b === c) {
    alert("All numbers are the same");
} else {
    alert("All numbers are not the same");
}

if (a === b || a === c || b === c) {
    alert("There are matching numbers");
} else {
    alert("All numbers are different");
}