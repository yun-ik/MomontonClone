const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");

function getTime(){
    const date = new Date();
    const hours = date.getHours(),
    minutes = date.getMinutes(),
    secondes = date.getSeconds(); 

    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:` +
    `${minutes < 10 ? `0${minutes}` : minutes}`;
    //:` +    `${secondes < 10 ? `0${secondes}` : secondes}`;
}

function init(){
    setInterval(getTime, 1000);
}
init();