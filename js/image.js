const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg" ];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const putImgae = document.createElement("img");
putImgae.src = `./img/${chosenImage}`;
putImgae.classList.add("randomimg")

const imgSection = document.querySelector("#wrap");
imgSection.appendChild(putImgae);



