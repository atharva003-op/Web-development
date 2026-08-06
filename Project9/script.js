const button = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
const text = document.querySelector(".text");


button.onclick = function() {
    document.body.classList.toggle("body1");
    navbar.classList.toggle("navbar1");
    button.classList.toggle("button");
    text.classList.toggle("text1");
}
