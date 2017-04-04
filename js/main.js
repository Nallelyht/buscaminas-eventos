var btnExplotar = document.getElementsByClassName('explotar');
var bomba =document.getElementsByClassName("bomba");
//console.log(btnExplotar[0]);
var longitud = btnExplotar.length;
console.log(longitud);

for(var i = 0; i < longitud; i++){
    btnExplotar[i].addEventListener('click',mostrarBomba);
    //btnExplotar[i].addEventListener('click',eliminar);

}

function mostrarBomba(){
    
    for(var j=0; j<longitud; j++){
        var imagen = document.createElement("img");
        imagen.src = "bomba.jpeg";
        bomba[j].appendChild(imagen);
        // var boton = bomba[j].firstChild;
        // bomba[j].removeChild(boton);
        // imagen.previousSibling.remove();
        btnExplotar[0].remove();
        
    }
    alert("Game Over")


}