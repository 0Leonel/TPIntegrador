// alert("HOLA MUNDO");

function calcularPrecioTotal() {
    console.log("ingreso a calcularPrecioTotal");

    //en cantEnt almaceno la cant de entradas que ingresó el usuario
    let cantEnt=document.getElementById("cantEntradas").value;
    console.log("cantEnt: " + cantEnt);

    document.getElementById("titulo").innerHTML="Comprar " + cantEnt + " entradas."

    //en porcDesc almaceno el descuento que seleccionó el usuario
    let porcDesc=document.getElementById("porcDescuento").value;
    console.log("porcDesc: " + porcDesc);

    //en descuento almacenamos el total de pesos para descontar
    let descuento=(cantEnt*1000) * porcDesc/100;
    console.log("descuento: " + descuento);

    //precio sin descuento
    let precio=cantEnt*1000;
    console.log("precio " + precio);

    //precio total a pagar con el descuento
    let precioFin= (cantEnt*1000) - descuento;
    console.log("precioFin: " + precioFin);

    //modifico el input precio final para poner el total con descuento
    document.getElementById("precioFinal").value=precio;
    document.getElementById("descuento").innerHTML=descuento;
    document.getElementById("precionFinal2").innerHTML=precioFin;
}
document.getElementById('ser_orador').style.display = 'none';
document.getElementById('comprar_tickets').style.display = 'none';

document.getElementById('comprar').addEventListener('click', function() {
    document.getElementById('ser_orador').style.display = 'none';
    document.getElementById('comprar_tickets').style.display = 'block'; 
    location.href='#comprar_tickets';

});
document.getElementById('orador').addEventListener('click', function() {
    document.getElementById('comprar_tickets').style.display = 'none'; 
    document.getElementById('ser_orador').style.display = 'block';
    location.href='#ser_orador';

});
function display(){
    var x = document.getElementById('comprar_tickets');
    var y = document.getElementById('ser_orador')
    if(x.style.display==='none'){
        x.style.display= 'block';
        y.style.display = 'none';
        location.href='#comprar_tickets';
    }
    else{
        x.style.display = 'block';
        y.style.display = 'none';
        location.href='#comprar_tickets';

    }
}
function display2(){
    var x = document.getElementById('comprar_tickets');
    var y = document.getElementById('ser_orador')
    if(y.style.display==='none'){
        y.style.display= 'block';
        x.style.display = 'none';
        location.href='#ser_orador';

    }else{
        y.style.display = 'block';
        x.style.display = 'none';
        location.href='#ser_orador';

    }
}
function miEnviar(){
    alert("Se envio correctamente");
}

function miOrador(){
    alert("Gracias por sumarte a la comunidad");
}
function proximamente(){
    alert("Proximamente disponible");
}