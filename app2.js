let gomb = document.getElementById('gomb');
let doboz = document.getElementById('doboz');
let gomb2 = document.getElementById('gomb2');
let mailInp = document.getElementById('mailInp');
let titleInp = document.getElementById('titleInp');
let area = document.getElementById('area');
let list = document.getElementById('list');
let cancel = document.getElementById('cancel');
let eror = document.getElementById('eror');
let X = document.getElementById('X');

let EMAILS = [];

gomb.addEventListener("click", function () {
    doboz.style.display = 'block';
    gomb.style.display = 'none';
});

cancel.addEventListener('click', function () {
    doboz.style.display = 'none';
    gomb.style.display = 'block';
});


gomb2.addEventListener('click', function () {
   EMAILS.push({
       "email": mailInp.value,
       "title": titleInp.value,
       "message": area.value
   });



    const emailTitle = document.createElement( "li" );
    emailTitle.innerText = titleInp.value;

    list.appendChild(emailTitle);

    mailInp.value = null;
    titleInp.value = null;
    area.value = null;

    emailTitle.addEventListener('click', function () {
        // const index = getChildIndex( e.target );
        //
        // const email = EMAILEK[ index ];
        //
        // mailInp.value   = email.cimzett;
        // titleInp.value       = email.cim;
        // area.value    = email.uzenet;
    });
});






