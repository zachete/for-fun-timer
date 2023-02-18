const formatNumber = (digit)=>digit.toString().padStart(2, "0");
const getTimerString = (date)=>{
    const [hours, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ].map(formatNumber);
    return `${hours}:${minutes}:${seconds}`;
};
const playSound = ()=>{
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 700;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(()=>{
        oscillator.stop();
    }, 400);
};
const startDate = new Date();
const container = document.getElementById("timer");
startDate.setHours(24, 0, 0);
setInterval(()=>{
    startDate.setSeconds(startDate.getSeconds() - 1);
    // playSound();
    if (container) container.innerHTML = getTimerString(startDate);
}, 1000);

//# sourceMappingURL=index.377278e2.js.map
