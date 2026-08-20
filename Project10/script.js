const nav = document.querySelector(".navbar");
const body = document.body;
const button = document.getElementById("btn");
const logo = document.getElementById("logo");
const box = document.querySelector(".box");
const changeBox = document.querySelector(".change")

button.onclick = function() {
    nav.classList.toggle("navbar1");
    button.classList.toggle("button1");
    body.classList.toggle("body1");
    logo.classList.toggle("logo1");
    changeBox.classList.toggle("change1");

    if (button.textContent === "Dark Theme") {
        button.textContent = "Light Theme";
    } else {
         button.textContent = "Dark Theme";
    }
}

changeBox.onclick = function() {
    box.classList.toggle("box1");
}
