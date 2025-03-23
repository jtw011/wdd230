document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const directory = document.querySelector("#directory");

    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            displaySpotlightMembers(members);
        });

    function displaySpotlightMembers(members) {
        directory.innerHTML = "";

        const goldMembers = members.filter(member => member.membershipLevel === "Gold");
        const silverMembers = members.filter(member => member.membershipLevel === "Silver");
        const platinumMembers = members.filter(member => member.membershipLevel === "Platinum");

        const selectedGold = goldMembers.length > 0 ? goldMembers[Math.floor(Math.random() * goldMembers.length)] : null;
        const selectedSilver = silverMembers.length > 0 ? silverMembers[Math.floor(Math.random() * silverMembers.length)] : null;
        const selectedPlatinum = platinumMembers.length > 0 ? platinumMembers[Math.floor(Math.random() * platinumMembers.length)] : null;

        const selectedMembers = [selectedGold, selectedSilver, selectedPlatinum].filter(member => member !== null);

        selectedMembers.forEach(member => {
            let section = document.createElement("section");
            section.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
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
