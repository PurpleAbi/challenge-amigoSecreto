let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", ()=>{
        let btnHtml =  document.querySelectorAll(".drum")[i].textContent;
        keyPress(btnHtml);
        btnAnimation(btnHtml);
    });
};

document.addEventListener("keydown", (e)=>{
    pressedKey = e.key;
    keyPress(pressedKey);
    btnAnimation(pressedKey);
});

function keyPress(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            let crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;

        default: 
            console.log(btnHtml);
            break;
    }
}

function btnAnimation(currentkey){
    let activeBtn = document.querySelector("." + currentkey);
    activeBtn.classList.add("pressed");
    setTimeout(()=>{
        activeBtn.classList.remove("pressed");
    }, 100)
}

// setInterval(()=>{
//     document.querySelector("body").classList.add("game-over");
//     document.getElementsByTagNameNS("button").disabled = true;
// }, 1000);

``