setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hourRotation = 30 * h + m / 2;
    let minRotation = 6 * m;
    let secRotation = 6 * s;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;

}, 1000);