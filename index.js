let countElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-ele");
let count = 0;

function increment() {
  count += 1;
  countElement.textContent = count;
}

function save() {
  saveElement.textContent += count + " - ";
  count = 0;
  countElement.textContent = 0;
}
