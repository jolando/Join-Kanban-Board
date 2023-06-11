let contacts;
let newContact;

async function initContacts() {
    includeHTML();
    await getContacts();
    renderContacts();
}

function getNewContacts() {
  newContact = {
    email: document.getElementById('email-field').value,
    first_name: document.getElementById('first-name-field').value,
    last_name: document.getElementById('last-name-field').value,
    user: 1
  }

  return newContact;
}

function renderContacts() {
    let tableHTML = `
    <table>
      <tr>
        <th>Name</th>
        <th>E-Mail</th>
      </tr>
  `;
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        tableHTML += `
      <tr>
        <td>${contact.first_name} ${contact.last_name}</td>
        <td>${contact.email}</td>
      </tr>
    `;
    }
    tableHTML += `</table>`;
    document.getElementById('contacts-box').innerHTML = tableHTML;
}

function addContact(event){
    event.preventDefault();
    executeAddContact();
}

async function executeAddContact(){
  newContact = getNewContacts();
  await saveContacts(newContact);
  location.reload();
}


