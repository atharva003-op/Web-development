const box = document.querySelector(".square");

const button1 = document.getElementById("btn1");

button1.onclick = function() {
    box.classList.toggle("button1");

    if (button1.textContent === "Rotate") {
        button1.textContent = "Stop";
    } else {
        button1.textContent = "Rotate";
    }
}

const button2 = document.getElementById("btn2");

button2.onclick = function() {
    box.classList.toggle("button2");

    if (button2.textContent === "Scale") {
        button2.textContent = "Stop";
    } else {
        button2.textContent = "Scale";
    }
}

const button3 = document.getElementById("btn3");

button3.onclick = function() {
    box.classList.toggle("button3");

    if (button3.textContent === "Move up") {
        button3.textContent = "Stop";
    } else {
        button3.textContent = "Move up";
    }
}

const button4 = document.getElementById("btn4");

button4.onclick = function() {
    box.classList.toggle("button4");

    if (button4.textContent === "Move down") {
        button4.textContent = "Stop";
    } else {
        button4.textContent = "Move down";
    }
}

const button5 = document.getElementById("btn5");

button5.onclick = function() {
    box.classList.toggle("button5");

    if (button5.textContent === "Circle") {
        button5.textContent = "Stop";
    } else {
        button5.textContent = "Circle";
    }
}

const button6 = document.getElementById("btn6");

button6.onclick = function() {
    box.classList.toggle("button6");

    if (button6.textContent === "Animate") {
        button6.textContent = "Stop";
    } else {
        button6.textContent = "Animate";
    }
}
