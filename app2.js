let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');

gomb.addEventListener("click", function () {
   doboz.style.display = 'block';
   gomb.style.display = 'none';
});