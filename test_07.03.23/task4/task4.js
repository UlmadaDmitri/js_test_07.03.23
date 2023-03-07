function showMax() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var max = Math.max(x, y);
    document.getElementById("max").innerHTML = "Максимум: " + max;
}