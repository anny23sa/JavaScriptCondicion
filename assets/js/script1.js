let tieneBorde = false;

function cambiodeborde() {
    let imagen = document.getElementById("imagen")
    
    if(tieneBorde == false){
        imagen.style.border = "2px solid red";
        tieneBorde = true;
    } else {
        imagen.style.border = "none";
        tieneBorde = false;
    }
}



