// JavaScript Document

function DOM(){
    var palabra = document.getElementsByTagName("p");
	
for(var i=0; i<palabra.length; i++) {
	
  var parrafo = palabra[i];
  parrafo.style.color ="red";
}}
function DOM1(){
    var palabra = document.getElementsByTagName("p");
	
for(var i=0; i<palabra.length; i++) {
	
  var parrafo = palabra[i];
  parrafo.style.color ="blue";
}}

				function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior + 1
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}

function esta(caracter, miarray){

  for(var j=0;j<miarray.length;j++){
    if (caracter==miarray[j]){
		return true;
    }else{
		
	}
  }
  return false;
}

function estanTodas(arrayAciertos, mipalabra){
	for(var i=0; i<mipalabra.length; i++){
		if(!esta(mipalabra.charAt(i),arrayAciertos))
			return false;
	}
	return true;
}

var palabras = ['Finales', 'cavaliers', 'wade', 'lebron', 'spurs', 'conferencia', 'heat', 'durant', 'basketball'];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)]
var aciertos = [];

//console.log(palabraEscogida);

function escribePalabra(palabra, arrayAciertos){
	//console.log("estoy en escribePalabra y arrat de aciertos es: " , arrayAciertos);
	var texto = '';
	for(var i=0; i<palabra.length; i++){
		texto += "<span>";
		var cActual = palabra.charAt(i);
		if(esta(cActual,arrayAciertos)){
			texto += cActual;
		}else{
			texto += '_';
		}
		texto += "</span>";
		//console.log(cActual)
	}
	$("#letras").html(texto);
}




$(document).ready(function(){
	
	//creo los botones con las letras
	var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for(i=0; i<letras.length; i++){
		//creo el span de la letra
		letraActual = $('<span class="botonletra">' + letras[i] + '</span>');
		letraActual.data("letra",letras[i]);
		//lo convierto en un botón
		letraActual.button();
		letraActual.click(function(){
			//traigo la letra pulsada
			var miletra = $(this).data("letra").toLowerCase()
			//miro si esa letra está en la palabra
			if(palabraEscogida.indexOf(miletra)!=-1){
				//si está, va para aciertos
				aciertos.push(miletra);
				escribePalabra(palabraEscogida, aciertos);
				//miro si ha ganado
				if(estanTodas(aciertos,palabraEscogida)){
					var caja = $('<div class="dialogletra" title="Has Ganado!!">Felicidades! has adivinado la palabra!!</div>');
					caja.dialog({
					modal: true,
					width: 600,
					buttons: {
						"Ok": function(){
							$(this).dialog("close");
						}
					}
					});	
				}
			}else{
				//no estaba
				numFallos++;
				dibujaAhorado(numFallos);
				//miro si se ha perdido
				if(numFallos==6){
					var caja = $('<div class="dialogletra" title="Has Perdido!!">Lo lamento!! la palabra era: ' + palabraEscogida + '</div>');
					caja.dialog({
					modal: true,
					width: 600,
					buttons: {
						"Ok": function(){
							$(this).dialog("close");
						}
					}
					});	
				}
			}
			//una vez pulsado el botón, lo desabilito y quito su evento click
			$(this).button("disable");
			$(this).unbind( "click" );
			
		})
		$("#botonesletras").append(letraActual);
	}
	
	//inicio el canvas
	dibujaAhorado(numFallos);
	
	//inicio las palabras
	escribePalabra(palabraEscogida, aciertos);
	
});

/////////////////////////////////
//CANVAS
/////////////////////////////////
function cargaContextoCanvas(idCanvas){
	var elemento = document.getElementById(idCanvas);
	if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){
			return contexto;
		}
	}
	return false;
}
function borrarCanvas(contexto, anchura, altura){
	contexto.clearRect(0,0,anchura,anchura);
}
function dibujaHorca(ctx){
	ctx.fillStyle = '#462501';
	ctx.fillRect(64,9,26,237);
	ctx.fillRect(175,193,26,53);
	ctx.fillRect(64,193,136,15);
	ctx.fillRect(64,9,115,11);
	ctx.beginPath();
	ctx.moveTo(64,65);
	ctx.lineTo(64,80);
	ctx.lineTo(133,11);
	ctx.lineTo(118,11);
	ctx.fill();
}
function dibujaCabeza(ctx){
	var img = new Image();  
	img.onload = function(){
		ctx.fillStyle = '#f2d666';
		ctx.drawImage(img,150,38);
		ctx.fillRect(172,12,4,28);
	}  
	img.src = '../Fotos/wade.jpg'; 
}
function dibujaCuerpo(ctx){
	ctx.beginPath();
	ctx.moveTo(171,82);
	ctx.lineTo(168,119);
	ctx.lineTo(162,147);
	ctx.lineTo(189,149);
	ctx.lineTo(185,111);
	ctx.lineTo(183,83);
	ctx.fill()
}
function dibujaBrazoIzq(ctx){
	ctx.beginPath();
	ctx.moveTo(173,102);
	ctx.lineTo(140,128);
	ctx.lineTo(155,133);
	ctx.lineTo(178,114);
	ctx.fill()
}
function dibujaBrazoDer(ctx){
	ctx.beginPath();
	ctx.moveTo(180,99);
	ctx.lineTo(222,121);
	ctx.lineTo(209,133);
	ctx.lineTo(183,110);
	ctx.fill()
}
function dibujaPiernaIzq(ctx){
	ctx.beginPath();
	ctx.moveTo(166,142);
	ctx.lineTo(139,175);
	ctx.lineTo(164,178);
	ctx.lineTo(175,144);
	ctx.fill()
}
function dibujaPiernaDer(ctx){
	ctx.beginPath();
	ctx.moveTo(178,145);
	ctx.lineTo(193,178);
	ctx.lineTo(212,170);
	ctx.lineTo(188,142);
	ctx.fill()
}
////////////////////////////////////////////////////////
// GESTION DE FALLOS
////////////////////////////////////////////////////////
var numFallos = 0;
function dibujaAhorado(numerrores){
	var contexto = cargaContextoCanvas('canvasahorcado');
	if(contexto){
		dibujaHorca(contexto);
		if(numFallos>0){
			dibujaCabeza(contexto)
		}
		contexto.fillStyle = '#1f3e18';
		if(numFallos>1){
			dibujaCuerpo(contexto)
		}
		if(numFallos>2){
			dibujaBrazoIzq(contexto)
		}
		if(numFallos>3){
			dibujaBrazoDer(contexto)
		}
		if(numFallos>4){
			dibujaPiernaIzq(contexto)
		}
		if(numFallos>5){
			dibujaPiernaDer(contexto)
		}
		
	}
}
				



var resp = new Object();
var a, b, c, d, e = 0;
function NBAFINALS(){
window.location.href = "../html/NBAFINALS.html";
}
function NBALLSTAR(){
window.location.href = "../html/NBALLSTAR.html";
}
function NBACARES(){
window.location.href = "../html/NBACARES.html";
}
function NBALEGENDS(){
window.location.href = "../html/NBALEGENDS.html";
}

function NBA2K14(){
window.location.href = "../html/NBA2k14.html";
}

function NBAIMAGEFDROP(){
	window.location.href = "../html/NBAIMAGEDROP.html";
	}
	
function NBAQUIZ(){
	window.location.href = "../html/NBAQUIZ.html";
	}	
	function NBAAHOR(){
	window.location.href = "../html/NBAHORCADO.html";
	}

function dragStart(ev) {
    ev.dataTransfer.effectAllowed='copy';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    return true;
}

function dragEnter(ev) {
    var iddrag = ev.dataTransfer.getData("Text");
    return true;
}

function dragOver(ev) {
   var iddrag = ev.dataTransfer.getData("Text");
    return true;
}

function dragOver(ev) {
    var iddrag = ev.dataTransfer.getData("Text");
    var id = ev.target.getAttribute('id');
   if( (id =='box1' && iddrag=='drag')){
	   	   return false;
		   
	   }
	        
    else if( (id =='box2' && iddrag=='drag4')){
        return false;
		alert("correcto");
	}
    else if( id =='box3' && iddrag == 'drag2'){
        return false;
	}
	 else if( id =='box4' && iddrag == 'drag5'){
        return false;
	}
	else if( id =='box5' && iddrag == 'drag3'){
        return false;
	}
    else
		return true;

		
}

function dragEnd(ev) {
    ev.dataTransfer.clearData("Text");
    return true
}

function dragDrop(ev) {
    var iddrag = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(iddrag));
    ev.stopPropagation();
    return false;
}

function isNull(valor){
 if (valor.toString()=='undefined'){ return true;}
 else if (valor.toString()=='NULL'){ return true;}
}
function verQueTieneDebug(id){
	var str="";
	var caja=document.getElementById(id);
	for( var i = 0; i < caja.childNodes.length; i++ ) {
		if (caja.childNodes[i].nodeType === 1) {
			var tipo=caja.childNodes[i];
			var id1=caja.childNodes[i].getAttribute('id');
			var valor=document.getElementById(id1).innerHTML;
			str+="tipo="+tipo+" id="+id1+ " valor="+valor;
		}
	}
	if(str=="") str="nada (los textos no cuentan porque no estan encapsulados en etiquetas html y no cuentan como tal. Si se les encapsula en <span></span> si que contarian (porque serian elementos hijos). Un ejemplo de esto es el cuadro negro.";
	alert(str);
}
function verQueTiene(id){
	var str="";
	var caja=document.getElementById(id);
	for( var i = 0; i < caja.childNodes.length; i++ ) {
		if (caja.childNodes[i].nodeType === 1) {
			var tipo=caja.childNodes[i];
			var id1=caja.childNodes[i].getAttribute('id');
			var valor=document.getElementById(id1).innerHTML;
			str+=""+valor+"\n";
		}
	}
	if(str=="") str="No contiene nada";
	else str="Contiene:\n"+str;
	
	alert(str);
}

