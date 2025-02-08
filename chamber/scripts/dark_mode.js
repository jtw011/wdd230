const toggle = document.getElementById('darkModeToggle');

// Toggle the dark mode class when the checkbox is clicked
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});
