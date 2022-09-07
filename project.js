
const container = document.querySelector ('#container');
container.textContent = "nais";
container.style.color = "blue";

const like = document.createElement("div");
like.classList.add('like');
like.textContent = 'Hello World!' 
container.appendChild(like);
