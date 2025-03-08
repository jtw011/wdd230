document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const directory = document.querySelector("#directory");

    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            displayMembers(members);
        });

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            let section = document.createElement("section");
            section.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>Membership Level:</strong> ${member.membership}</p>
            `;
            directory.appendChild(section);
        });
    }

    gridButton.addEventListener("click", () => {
        directory.classList.add("grid");
        directory.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        directory.classList.add("list");
        directory.classList.remove("grid");
    });
});
