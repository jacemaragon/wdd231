async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <img src="images/${member.image}" alt="${member.name}" />
        `;
        container.appendChild(card);
    });
}

document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('member-container').classList.add('grid-view');
    document.getElementById('member-container').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('member-container').classList.remove('grid-view');
    document.getElementById('member-container').classList.add('list-view');
});

function updateFooter() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

document.getElementById('hamburger').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

fetchMembers();
updateFooter();