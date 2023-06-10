let contacts;

async function initContacts() {
    includeHTML();
    await getContacts();
    renderContacts();
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

function executeAddContact(){
    
}


