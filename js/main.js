var btnExplotar = document.getElementsByClassName('explotar');
var bomba = document.getElementsByClassName("bomba");
var nUno = document.getElementsByClassName("nUno");
var nDos = document.getElementsByClassName("nDos");
var vacia = document.getElementsByClassName("vacia");
var vacio = document.getElementsByClassName("vacio");
var celdas = document.getElementsByTagName("th");
var longitud = btnExplotar.length;

for(var i = 0; i < vacia.length; i++){ 
    vacia[i].addEventListener("click",quitarBoton);
    vacio[i].addEventListener("click",mostrarColor); 
} 

function quitarBoton(){
   //this.style.display = "none";
    this.remove();
    
}
function mostrarColor(){
    this.style.backgroundColor="#A9F5F2";
}
for(var i = 0; i < nUno.length; i++){ // 
    nUno[i].addEventListener("click",mostrarUno) //
} //for (var i = 0; i < nUno.length; i++ ){ // nUno[i].addEventListener("click",mostrarNUno) //}

function mostrarUno(){
    this.innerHTML = "1";
}
for(var i = 0; i < nDos.length; i++){ 
    nDos[i].addEventListener("click",mostrarDos) 
} 

function mostrarDos(){
    this.innerHTML = "2";
}
for(var i = 0; i < longitud; i++){
    btnExplotar[i].addEventListener('click',mostrarBomba);
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
    
    event.stopImmediatePropagation();
    sinClick();

}

function sinClick(){
    var largo = celdas.length;
    
    for (var i= 0; i<largo; i++){
        celdas[i].removeEventListener("click", mostrarUno);
        celdas[i].removeEventListener("click", mostrarDos);
        celdas[i].removeEventListener("click", quitarBoton);
        celdas[i].removeEventListener("click", mostrarColor);
    }
    
}