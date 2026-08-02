const button = document.getElementById("myBtn");
const img = document.querySelector("img");
const text = document.querySelector("h1");

button.onclick = function() {
    if (img.getAttribute("src") === "batman_img1.jpg") {
        img.setAttribute("src","superman_img1.jpg");
        text.textContent = "Superman";
    } else {
        img.setAttribute("src","batman_img1.jpg");
        text.textContent = "Batman";
    }
}
