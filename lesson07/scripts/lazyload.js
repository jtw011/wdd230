document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();
});
