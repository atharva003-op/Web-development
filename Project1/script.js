let name;
let age;
let email;

// document.getElementById("myBtn").onclick = function () {
//     name = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${name}`;
//     document.getElementById("myH1").style.color = 'red';
// }

document.getElementById("myBtn").onclick = function() {
    name = document.getElementById("username").value;
    age = document.getElementById("age").value;
    email = document.getElementById("email").value;

    document.getElementById("myP1").textContent = 
    `Hello ${name} your age is ${age} and your email is ${email}`
    document.getElementById("myImg").src = "neon1.jpg";
}
