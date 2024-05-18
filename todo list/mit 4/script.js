var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");
var addButton = document.getElementById("addButton");
var contactList = document.getElementById("contactList");

let valuesArray = JSON.parse(localStorage.getItem('valuesArray')) || [];

function displayContact(contact) {
    var details = document.createElement('div');
    details.classList.add('details');

    var nameText = document.createElement('p');
    nameText.classList.add('names');
    nameText.textContent = contact.first;

    var emailText = document.createElement('p');
    emailText.classList.add('emails');
    emailText.textContent = contact.second;

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('dlt-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        details.remove();
        valuesArray = valuesArray.filter(item => item !== contact);
        localStorage.setItem('valuesArray', JSON.stringify(valuesArray));
    });

    details.appendChild(nameText);
    details.appendChild(emailText);
    details.appendChild(deleteButton);
    contactList.appendChild(details);
}

document.addEventListener('DOMContentLoaded', function() {
    valuesArray.forEach(displayContact);
});


addButton.addEventListener('click', function() {
    var newContact = {
        first: nameInput.value,
        second: emailInput.value
    };

    valuesArray.push(newContact);
    localStorage.setItem('valuesArray', JSON.stringify(valuesArray));

    displayContact(newContact);

    nameInput.value = '';
    emailInput.value = '';
});
