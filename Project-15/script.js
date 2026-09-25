const button = document.getElementById("btn");
const navbar = document.querySelector(".navbar");

button.onclick = function () {
    button.classList.toggle("btn1");
    navbar.classList.toggle("navbar1");
    document.body.classList.toggle("body1");
}
