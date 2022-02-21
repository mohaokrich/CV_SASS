function darkMode() {
    var leftElement = document.getElementsByClassName("lado-derecho")[0];
    leftElement.style.color = 'white';
    leftElement.style.backgroundColor  = '#444440';

    var rightElement = document.getElementsByClassName("lado-izquierdo")[0];
    rightElement.style.backgroundColor = '#162742';

    document.getElementsByTagName("h1")[0].style.color = "#162742";

    for (let index = 0; index < 6; index++) {
        var titulos = document.getElementsByTagName("h4")[index];
        var sutitulos = document.getElementsByTagName("h5")[index];
        titulos.style.color = "white";
        sutitulos.style.color ="#D0D0D0"
    }
    contador = 0;
    
}
function darkMode2() {
    var element = document.getElementsByClassName("lado-derecho")[0];
    element.classList.toggle("dark-mode");
  }