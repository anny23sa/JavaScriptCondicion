function cambiodeborde() {
    
    let borderOn = "2px";
    let borderOff = "0px";
    let imagen = document.getElementById("imagen").style.border.width

    if(imagen == borderOff){
        imagen = borderOn;
    } else {
        imagen = borderOff;
    }
}



