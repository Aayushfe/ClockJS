setInterval(setClock, 1000)


const hrHand = document.getElementById("data-hour-hand");
const minHand = document.getElementById("data-minute-hand");
const secHand = document.getElementById("data-second-hand");

function setClock(){
    const currentDate = new Date();
    const secRatio = currentDate.getSeconds()/60;
    const minRatio = (secRatio+currentDate.getMinutes())/ 60;
    const hrRatio = (minRatio+currentDate.getHours())/ 12;

    setRotation(hrHand,hrRatio)
    setRotation(minHand,minRatio)
    setRotation(secHand,secRatio)
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock();