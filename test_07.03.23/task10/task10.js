function showSelectedDiscipline() {
    var select = document.getElementById("select-discipline");
    var selectedOption = select.options[select.selectedIndex].text;
    var element = document.getElementById("element");
    element.innerHTML = "Выбранная дисциплина: " + selectedOption;
}