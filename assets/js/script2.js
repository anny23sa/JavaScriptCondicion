function valor(){
    
    let valor = parseInt(document.getElementById('number1').value);
    let valor2 = parseInt(document.getElementById('number2').value);
    let valor3 = parseInt(document.getElementById('number3').value);
    let valorTotal = valor + valor2 + valor3
    let span = document.querySelector('#resultado')
    span.innerHTML = valorTotal
    
    if (input1<0 || input2<0 || input3<0 )

    if (valorTotal == 0) {
        resultado.innerHTML = "El número ingresado debe ser mayor que 0";
    } else if (valorTotal <= 10) {
        resultado.innerHTML = "Elegiste " + valorTotal + " stickers ";
    } else {
        resultado.innerHTML = "Llevas demasiados stickers!!";
    }
}
