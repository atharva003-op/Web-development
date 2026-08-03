const navbar = document.getElementById("nav");
const h1 = document.querySelector(".logo");
const button = document.getElementById("btn");
const home = document.getElementById("home");
const about = document.getElementById("about");
const body = document.body;
const text = document.getElementById("text");

button.onclick = function() {
    if (button.textContent == "DARK THEME") {
        navbar.style.backgroundColor = "black";
        navbar.style.borderBottom = "5px solid darkblue";
        h1.style.color = "white";
        button.style.backgroundColor = "whitesmoke";
        button.style.color = "black";
        button.style.border = "3px solid cyan";
        home.style.color = "whitesmoke";
        about.style.color = "whitesmoke";
        body.style.backgroundColor = "darkblue";
        text.style.color = "whitesmoke";

        button.textContent = "LIGHT THEME";
    } else {
        navbar.style.backgroundColor = "whitesmoke";
        navbar.style.borderBottom = "5px solid red";
        h1.style.color = "black";
        button.style.backgroundColor = "black";
        button.style.color = "whitesmoke";
        button.style.border = "3px solid darkblue";
        home.style.color = "black";
        about.style.color = "black";
        body.style.backgroundColor = "aliceblue";
        text.style.color = "black";

        button.textContent = "DARK THEME";
    }
}
