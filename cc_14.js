//Task 1 is in cc_14.html

//Task 2: Adding Support Tickets Dynamically
function createSupportTicket(customerName, issue, priority) {
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute("class", "ticket-card");

    const ticketContainer = document.getElementById('ticketContainer');

    const header = document.createElement('h2');
    header.textContent = customerName;

    const issue = document.createElement('p');
    issue.textContent = issue;

    const priority = document.createElement('p');
    priority.textContent = priority;
    priority.setAttribute = `class, ${priority}`;

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation();
        ticketCard.remove();
    })
    ticketCard.appendChild(header);
    ticketCard.appendChild(issue);
    ticketCard.appendChild(priority);
    ticketCard.appendChild(resolveButton);
    ticketContainer.appendChild(ticketCard);
};
