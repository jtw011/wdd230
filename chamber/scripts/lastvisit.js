document.addEventListener("DOMContentLoaded", function () {
    const lastVisitMessage = document.getElementById("last-visit-message");

    let lastVisit = localStorage.getItem("lastVisit");
    let now = Date.now();

    if (!lastVisit) {
        lastVisitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        let daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            lastVisitMessage.textContent = "Back so soon! Awesome!";
        } else {
            lastVisitMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? "" : "s"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});
