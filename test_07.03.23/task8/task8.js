var button = document.getElementById("counter");
var count = 1;

button.onclick = function() {
    count += 2;
    button.textContent = "Счетчик " + count;
};