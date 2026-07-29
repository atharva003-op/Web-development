document.getElementById("btn").onclick = function() {
    document.getElementById("text").textContent = "Image changed!";
    document.getElementById("img").src = "mountain1.jpeg";
    document.getElementById("text").style.color = "blue";
    document.getElementById("btn").textContent = "Clicked";
}
