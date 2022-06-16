const image = document.querySelector("img");
const text = document.querySelector("p");

let counter = 1;
let number = 0;
let blurCount = 100;

function counters() {
  number += counter;
  if (blurCount == 100 && number <= 100) {
    image.style.filter = `blur(${blurCount - number}px)`;
    text.style.opacity = `${blurCount - number}%`;
    console.log(blurCount - number);
    text.innerHTML = `${number}%`;
  } else {
  }
}

setInterval(counters, 50);
