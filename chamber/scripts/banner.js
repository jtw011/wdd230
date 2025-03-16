// Check if the current day is Monday, Tuesday, or Wednesday
function checkBannerVisibility() {
    const currentDate = new Date();
    const day = currentDate.getDay(); // 0: Sunday, 1: Monday, 2: Tuesday, etc.
  
    if (day === 1 || day === 2 || day === 3) { // Monday, Tuesday, Wednesday
      document.getElementById("meetBanner").style.display = "block";
    } else {
      document.getElementById("meetBanner").style.display = "none";
    }
}
  
// Close the banner when the user clicks the "Close" button
function closeBanner() {
    document.getElementById("meetBanner").style.display = "none";
}

// Call the function when the page loads
window.onload = function() {
    checkBannerVisibility();
};
