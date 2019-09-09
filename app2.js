let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');
let gomb2 = document.getElementById('gomb2');

gomb.addEventListener("click", function () {
   doboz.style.display = 'block';
   gomb.style.display = 'none';
});

