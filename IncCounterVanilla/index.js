let currentCount = 0;
const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
incrementBtn.addEventListener("click",(event)=>{
    currentCount+=1;
    countDisplay.innerHTML = currentCount;
});