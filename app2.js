let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');
let gomb2 = document.getElementById('gomb2');
let mailInp = document.getElementById('mailInp');
let titleInp = document.getElementById('titleInp');
let area = document.getElementById('area');
let list = document.getElementById('list');
let cancel = document.getElementById('cancel');
let eror = document.getElementById('eror');
let infobox = document.getElementById('infobox');

gomb.addEventListener("click", function () {
   doboz.style.display = 'block';
   gomb.style.display = 'none';
});

cancel.addEventListener('click', function () {
   doboz.style.display = 'none';
   gomb.style.display = 'block';
});




   gomb2.addEventListener('click', function () {


       if (titleInp.value.length > 3 || mailInp.value.length > 3 || area.value.length > 3) {
           eror.style.display = 'none';
       }

       if (titleInp.value.length < 3 || mailInp.value.length < 3 || area.value.length < 3) {
           eror.style.display = 'block';

       }else {
           let title = document.createElement("li");
           title.innerText = titleInp.value;
           list.appendChild(title);
           // mailInp.value = null;
           // titleInp.value = null;
           // area.value = null;
           // list.innerText = titleInp.value

            let email = document.createElement("h1");
            let textarea = document.createElement('p');
            email.innerText = mailInp.value;
            textarea.innerText = area.value;
            infobox.appendChild(email);
            infobox.appendChild(textarea);
            infobox.style.display = 'none';

           title.addEventListener('click', function () {
              infobox.style.display = 'block';
               mailInp.value = null;
               titleInp.value = null;
               area.value = null;
           });

       }




   });
