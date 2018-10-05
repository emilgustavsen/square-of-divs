const container = document.querySelector('#container')
container.style.display = 'grid'

for (let i = 0; i < 256; i += 1) {
	let div = document.createElement("div");
    div.classList.add("divvy")
    container.appendChild(div);
}

let divs = document.querySelectorAll(".divvy");

divs.forEach(divs => divs.onmouseover = function() {
	divs.style.backgroundColor = "red";
}); 

let button = document.querySelector('#button');

function createGrid(gridsize) {
	for (let i = 0; i < gridsize; i += 1) {
	let div = document.createElement("div");
    div.classList.add("divvy");
    container.appendChild(div);
};
};

button.addEventListener("click", createNewGrid);

function createNewGrid() {
	
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	};
	let gridsize = prompt("Put in a number",0);
	createGrid(gridsize * 4);
	let divs = document.querySelectorAll(".divvy");
	divs.forEach(divs => divs.onmouseover = function() {
	divs.style.backgroundColor = "red";
}); 
};

