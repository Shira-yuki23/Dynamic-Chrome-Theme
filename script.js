//const images = ["bg1.jpg", "bg2.jpg","bg3.jpg"];

//const images = ["b1.jpg", "b2.jpg","b3.jpg"];
const images = ["g1.gif", "g2.gif"];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${randomImage})`;
