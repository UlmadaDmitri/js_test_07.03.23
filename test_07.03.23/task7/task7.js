window.onload = function() {
    setTimeout(function() {
        var ol = document.createElement("ol");
        for (var i = 1; i <= 10; i++) {
            var li = document.createElement("li");
            li.textContent = "Элемент № " + i;
            ol.appendChild(li);
        }
        document.body.appendChild(ol);
    }, 5000);
};