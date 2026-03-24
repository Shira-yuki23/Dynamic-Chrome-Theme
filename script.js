const images = ["bg1.jpg", "bg2.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${randomImage})`;
