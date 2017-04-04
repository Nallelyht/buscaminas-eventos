var boton = document.getElementById('boton');
boton.addEventListener("click",eliminarBoton);


//este boton me vacia las celdas y las colorea con un nuevo backgroundColor
function eliminarBoton() {
  this.style.display = "none";
  document.getElementById('celdaVacia').style.backgroundColor = "#00bfff";
}

// var celdasV1=document.getElementById("celdasVacias1");
// var celdasV2=document.getElementById("celdasVacias2");
// var numeritos=document.getElementsByClassName("numero");
//
// celdasV1.addEventListener("click",colorCeldas);
// celdasV2.addEventListener("click",colorCeldas);
// function colorCeldas() {
//        var padre=this.parentNode;
//    this.style.display = "none";
//    padre.style.backgroundColor = "#00BFFF "
// }
// Prueba fer

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
    setTimeout(function(){
      alert("Game Over");  
    },300);
    


}