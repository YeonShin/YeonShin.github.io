const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg"
];

const selectImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/images/${selectImage}`;
bgImage.className = "backgroundImage";

document.body.appendChild(bgImage);