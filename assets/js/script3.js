function verificar(){
    const select1 = document.getElementById("option1").value;
    const select2 = document.getElementById("option2").value;
    const select3 = document.getElementById("option3").value;

    let clave = select1 + select2 + select3;

    switch(clave) {
        case "911":
            document.getElementById("mensaje").textContent = "Password 1 Correcto";
        break;
        case "714":
            document.getElementById("mensaje").textContent = "Password 2 Correcto";
        break;
        default:
            document.getElementById("mensaje").textContent = "Pasword Incorrecto"
    }
}