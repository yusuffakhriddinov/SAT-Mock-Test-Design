const hideBtn = document.querySelector(".timer button");
const timerDisplay = document.querySelector(".timer p");
const clockDisplay = document.querySelector(".timer #clock")
let hidden = false;
var totalSeconds = 30 * 60; // 30 minutes in seconds (timer input)
var timer = setInterval(updateTime, 1000);

function updateTime() {
    totalSeconds--;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    // Formatting the output to display two digits for both minutes and seconds
    var formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    timerDisplay.innerText = formattedTime;

    if (totalSeconds <= 0) {
        clearInterval(timer);
        document.getElementById('timer').innerText = "Time's up!";
    }
    if(minutes<5){
        timerDisplay.style.color = "rgb(190, 44, 56)";
        timerDisplay.style.marginBottom = "0";
        timerDisplay.style.marginTop = "10px";
        hideBtn.style.display = "none";
    }
}



hideBtn.addEventListener("click", () => {
    if(hidden){
        hidden = false;
        timerDisplay.style.display="block";
        clockDisplay.style.display="none";
        hideBtn.textContent = "hide"; 
    }else{
        hidden = true;
        timerDisplay.style.display="none";
        clockDisplay.style.display="block";
        hideBtn.textContent = "show";
    }
});

// Save Button

const saveBtn = document.querySelector(".multiple-choice-part .bar img");
let saveBtn_clicked = false;

saveBtn.addEventListener("click", () =>{
    if(saveBtn_clicked){
        saveBtn.src = "images/bookmark.png";
        saveBtn_clicked = false;
    }else{
        saveBtn.src = "images/bookmark-active.png";
        saveBtn_clicked = true;
    }
})

