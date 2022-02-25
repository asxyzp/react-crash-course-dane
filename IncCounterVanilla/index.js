// STORES THE CURRENT COUNT
let currentCount = 0;

// DOM NODES
const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");

// BUTTON CLICK EVENT HANDLER
incrementBtn.addEventListener("click", (event) => {
    currentCount += 1;
    countDisplay.innerHTML = currentCount;
});