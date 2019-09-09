let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');
let gomb2 = document.getElementById('gomb2');
let mailInp = document.getElementById('mailInp');
let titleInp = document.getElementById('titleInp');
let area = document.getElementById('area');
let list = document.getElementById('list');

gomb.addEventListener("click", function () {
   doboz.style.display = 'block';
   gomb.style.display = 'none';
});


   gomb2.addEventListener('click', function () {
         list.innerText = titleInp.value
   });
