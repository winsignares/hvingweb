var miCheckbox = document.getElementById("dn");

miCheckbox.addEventListener("click", function() {
    if(miCheckbox.checked) {
        logod.style.cssText = "opacity: 100;";
        cuerpo.style.cssText = "color: #faebd7;";
        cuerpo.style.backgroundColor = "#545454";
    } else {
        logod.style.cssText = "opacity: 0;";
        cuerpo.style.cssText = "color: #545454;";
        cuerpo.style.backgroundColor = "#faebd7";
    }
  });