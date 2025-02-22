document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("currentDate");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString(undefined, options);
});
