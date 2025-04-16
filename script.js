const gallery = document.getElementById("gallery");
const images = [
  "Queens 350.png",
  "Zip 29.png",
  "Tango 190.png",
  "Crossclimb 350.png",
  "Pinpoint 350.png",
  "Queens 351.png",
  "Zip 30.png",
  "Tango 191.png",
  "Crossclimb 351.png",
  "Pinpoint 351.png"
];

images.forEach(image => {
  const img = new Image();
  img.src = `image/${image}`;

  img.onload = () => {
    gallery.appendChild(img);
  };

  img.onerror = () => {
    console.log(`Failed to load image: ${image}`);
  };
});
