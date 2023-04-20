alert('Skrypt działa prawidłowo!');

let num = 12;
if (num > 10) {
    console.log('Podana liczba jest wieksza niz 10');
}
else {
    console.log('Podana liczba nie jest wieksza niz 10');
}

let firstNumber = 1;
let secondNumber = 2;
function add(num1,num2) {
    let sum = num1 + num2;
    return sum;
}
let par = document.querySelector('p');
par.textContent = 'dowolny tekst';
console.log(par);
let button = document.querySelector('button');
button.onclick = function() {alert('Klik dziala!')};
