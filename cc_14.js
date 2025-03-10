//Task 1 is in cc_14.html

// Task 2: Adding Support Tickets Dynamically
function createSupportTicket(customerName, issueDescription, priority) {
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute("class", "ticket-card");
    
    const ticketContainer = document.getElementById('ticketContainer');

    const header = document.createElement('h2');
    header.textContent = customerName;

    const issue = document.createElement('p');
    issue.textContent = issueDescription; //renamed to issueDescription

    const priorityElement = document.createElement('p');
    priorityElement.textContent = priority;
    priorityElement.setAttribute('class', priority.toLowerCase()); //set class to low/high/medium

//Task 5
    const editButton = document.createElement("button");
    editButton.textContent = "Edit"; //added this
    editButton.setAttribute("class", "edit-button");
    editButton.addEventListener("click", () => {
        const newCustomerName = prompt("Edit Customer Name", header.textContent);
        const newIssueDescription = prompt("Edit Issue", issue.textContent);
        const newPriority = prompt("Edit Priority", priorityElement.textContent);    

        if (newCustomerName) header.textContent = newCustomerName;
        if (newIssueDescription) issue.textContent = newIssueDescription;
        if (newPriority) priorityElement.textContent = newPriority;

        priorityElement.setAttribute('class', priority.toLowerCase());
    });

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation();
        ticketCard.remove();
    });

    ticketCard.appendChild(header);
    ticketCard.appendChild(issue);
    ticketCard.appendChild(priorityElement);
    ticketCard.appendChild(editButton); 
    ticketCard.appendChild(resolveButton);
    ticketContainer.appendChild(ticketCard);
};

// Task 4: Implementing Ticket Resolution with Event Bubbling
document.getElementById('ticketContainer').addEventListener('click', (event) => {
    if (event.target.classList.contains('ticket-card')) {
        console.log('Ticket clicked:', event.target);
        event.stopPropagation();
    }
});

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.ticket-card.high'); // Correct class name
    const highlightHighPriorityTicketsArray = Array.from(highlightHighPriorityTickets);

    highlightHighPriorityTicketsArray.forEach((ticket) => {
        ticket.style.backgroundColor = 'red';
    });
}

// Test cases
createSupportTicket('Father', 'My computer sounds like it is going to explode', 'High');
createSupportTicket('Mother', 'My computer is making a strange noise', 'Low');   
createSupportTicket('Brother', 'My computer is slow', 'Low');

// Call to highlight high-priority tickets
highlightHighPriorityTickets();

