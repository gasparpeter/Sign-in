let container = document.getElementById('container');
let btn = document.getElementById('button');
let userInput = document.getElementById('user');
let passInput = document.getElementById('pass');
let err = document.getElementsByClassName('error');
let don = document.getElementById('done');

let userValue = "Peti";
let passValue = "12345";





btn.addEventListener('click', function () {
   if (userInput.value === userValue && passInput.value === passValue) {
       don.style.display = 'block';
   }else {
       error.style.display = 'block';
   }
});