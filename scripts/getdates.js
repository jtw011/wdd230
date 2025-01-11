// Dynamically set the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Display last modified date
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
