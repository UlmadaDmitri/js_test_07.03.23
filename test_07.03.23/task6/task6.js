var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    if ((i + 1) % 2 == 0) {
        paragraphs[i].style.backgroundColor = "blue";
    } else {
        paragraphs[i].style.backgroundColor = "yellow";
    }
}