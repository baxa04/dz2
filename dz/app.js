//счетчик
var counter = document.getElementById("counter");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", function() {
    var value = parseInt(counter.textContent);
    if (value < 0) {
        return;
    }
    value += 1;
    counter.textContent = value;
    counter.classList.remove("red");
    counter.classList.add("green");
});

decrementButton.addEventListener("click", function() {
    var value = parseInt(counter.textContent);
    if (value <= 0) {
        return;
    }
    value -= 1;
    counter.textContent = value;
    counter.classList.remove("green");
    counter.classList.add("red");
})
//////////////////////////////////////////////////////
//координаты
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("coords").innerHTML = "X: " + x + ", Y: " + y;
}
/////////////////////////////////////////////////////////
//светафор
// function clickme() {
//     let color = prompt("Введите цвет (Red, Yellow or Green):");
//
//     if (color === "Red") {
//         document.querySelector(".red").style.backgroundColor = "red";
//         document.querySelector(".yellow").style.backgroundColor = "gray";
//         document.querySelector(".green").style.backgroundColor = "gray";
//         document.querySelector(".red").textContent = "STOP";
//         document.querySelector(".yellow").textContent = "";
//         document.querySelector(".green").textContent = "";
//     } else if (color === "Yellow") {
//         document.querySelector(".red").style.backgroundColor = "gray";
//         document.querySelector(".yellow").style.backgroundColor = "yellow";
//         document.querySelector(".green").style.backgroundColor = "gray";
//         document.querySelector(".red").textContent = "";
//         document.querySelector(".yellow").textContent = "SLOW";
//         document.querySelector(".green").textContent = "";
//     } else if (color === "Green") {
//         document.querySelector(".red").style.backgroundColor = "gray";
//         document.querySelector(".yellow").style.backgroundColor = "gray";
//         document.querySelector(".green").style.backgroundColor = "green";
//         document.querySelector(".red").textContent = "";
//         document.querySelector(".yellow").textContent = "";
//         document.querySelector(".green").textContent = "GO";
//     } else {
//         alert("Такого цвета нету");
//     }
// }