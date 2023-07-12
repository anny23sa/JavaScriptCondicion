    function valor(){
    
        let valor = document.getElementById('number1').value;
        let valor2 = document.getElementById('number2').value;
        let valor3 = document.getElementById('number3').value;
        /Validando valores nulos/
        if(valor=="") valor =0;
        if(valor2=="") valor2 =0;
        if(valor3=="") valor3 =0;
         
        /Validando los numeros ingresados negativo/
        if(valor<0){
            resultado.innerHTML = "El número ingresado en Conejo debe ser mayor que 0";
            return;
        }
        if(valor2<0){
            resultado.innerHTML = "El número ingresado en Gatos debe ser mayor que 0";
            return;
        }
        if(valor3<0){
            resultado.innerHTML = "El número ingresado en Perro debe ser mayor que 0";
            return;
        }
    
        let valorTotal = parseInt(valor) + parseInt(valor2) + parseInt(valor3)
        let span = document.querySelector('#resultado')
       
        /* Validando el total de stickers */
        if (valorTotal == 0) {
            resultado.innerHTML = "El número ingresado debe ser mayor que 0";
        } else if (valorTotal <= 10) {
            resultado.innerHTML = "Elegiste " + valorTotal + " stickers ";
        } else {
            resultado.innerHTML = "Llevas demasiados stickers!!";
        }
    }








    