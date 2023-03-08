function rendel() {
    let tipus = document.getElementById("tipus");
    let darab = document.getElementById("darab");

    if (darab.value == "" || tipus.value == "0") {
        alert("Válasszon ki egy pizzát a listából és írjon be a darabszámot!");
        return;
    }

    let ar = parseInt(tipus.value) * parseInt(darab.value);

    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(cb => {
        if (cb.checked) {
            ar += parseInt(cb.value.split("-")[1]);
        }
    });

    document.getElementById("sorszam").innerHTML = Math.floor(Math.random() * 100 + 1);
    document.getElementById("osszeg").innerHTML = ar;
    document.getElementById("alert").style.display = "block";
}