var img = new Image();

const imageArray = [
	img.src = "photos/image-1.jpg",
    img.src = "photos/image-2.jpg",
    img.src = "photos/image-3.jpg",
	img.src = "photos/image-4.jpg",
	img.src = "photos/image-5.jpg",
	img.src = "photos/image-6.jpg",
	img.src = "photos/image-7.jpg",
	img.src = "photos/image-8.jpg",
	img.src = "photos/image-9.jpg",

];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
