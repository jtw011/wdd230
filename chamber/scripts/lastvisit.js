const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
    console.log('Welcome! Let us know if you have any questions.');
} else {
    const daysBetween = Math.round((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
        console.log('Back so soon! Awesome!');
    } else if (daysBetween === 1) {
        console.log('You last visited 1 day ago.');
    } else {
        console.log(`You last visited ${daysBetween} days ago.`);
    }
}

localStorage.setItem('lastVisit', currentVisit);
