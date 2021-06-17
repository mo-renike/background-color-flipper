const colors = [
    "indigo",
    "lavender",
    "hotpink",
    "lawngreen",
    "green",
    "blue",
    "pink",
    "brown",
    "burgundy",
    "purple"
];

const btn = document.querySelector("#btn");
const color =  document.querySelector(".color")

btn.addEventListener('click', () => {
    const randomNumber =  getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}