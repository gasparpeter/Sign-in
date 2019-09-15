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

    if (titleInp.value.length < 3 || mailInp.value.length < 3 || area.value.length < 3) {
        alert('ERROR!')
    }else {

        EMAILS.push({
            "cimzett": mailInp.value,
            "cim": titleInp.value,
            "uzenet": area.value
        });



        const emailTitle = document.createElement( "li" );
        emailTitle.innerText = titleInp.value;
        list.appendChild(emailTitle);

        function deleteLI() {
            emailTitle.remove();
            deleteItem.remove();
            editBtn.remove();
        }


        const deleteItem = document.createElement('button');
        deleteItem.innerText = "DELETE";
        list.appendChild(deleteItem);

        deleteItem.addEventListener('click', deleteLI);

        emailTitle.addEventListener('click', function (e) {
            const index = getChildIndex( e.target );

            const email = EMAILS[ index ];

            mailInp.value   = email.cimzett;
            titleInp.value       = email.cim;
            area.value    = email.uzenet;
        });

        resetInputs();

    }

});

var getChildIndex = function(child){
    var parent = child.parentNode;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
};


function resetInputs() {
    mailInp.value = null;
    titleInp.value = null;
    area.value = null;
}


