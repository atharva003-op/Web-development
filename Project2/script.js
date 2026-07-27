const a = document.getElementById("increasebtn");
const b = document.getElementById("resetbtn");
const c = document.getElementById("decreasebtn");

let count = 0;

document.getElementById("increasebtn").onclick = function() {
    a = document.getElementById("number").textContent = count++;
}

document.getElementById("resetbtn").onclick = function() {
    b = document.getElementById("number").textContent = count = 0;
}

document.getElementById("decreasebtn").onclick = function() {
    a = document.getElementById("number").textContent = count--;
}
