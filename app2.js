let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');
let gomb2 = document.getElementById('gomb2');
let mailInp = document.getElementById('mailInp');
let titleInp = document.getElementById('titleInp');
let area = document.getElementById('area');
let list = document.getElementById('list');
let cancel = document.getElementById('cancel');

gomb.addEventListener("click", function () {
   doboz.style.display = 'block';
   gomb.style.display = 'none';
});

cancel.addEventListener('click', function () {
   doboz.style.display = 'none';
   gomb.style.display = 'block';
});


   gomb2.addEventListener('click', function () {
         // list.innerText = titleInp.value
       let title = document.createElement("li");
       title.innerText = titleInp.value;
       list.appendChild(title);
       mailInp.value = null;
       titleInp.value = null;
       area.value = null;
       

       title.addEventListener('click', function () {
           console.log('dsa')
       })

   });
