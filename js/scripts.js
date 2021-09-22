function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const bg = document.getElementById("mh_g0");
const sph1 = document.getElementById("mh_g1");
const sph2 = document.getElementById("mh_g2");
const sph3 = document.getElementById("mh_g3");
const sph4 = document.getElementById("mh_g4");

bg.style.transform = "rotate(" + getRandomNumber(1,360) + "deg)";
sph1.style.height = getRandomNumber(50,100) + "vw";
sph1.style.left = getRandomNumber(-44,44) + "%";
sph2.style.transform = "rotate(" + getRandomNumber(1,360) + "deg)";
sph3.style.width = getRandomNumber(75,180) + "%";
sph4.style.transform = "rotate(" + getRandomNumber(1,360) + "deg)";
sph4.style.right = getRandomNumber(4,66) + "%";
sph4.style.height = getRandomNumber(100,240) + "vw";