// JavaScript Document
var a,b,c,d,f = 0;
window.onload = function(){
var boton = document.getElementById("submit_return_form_button");

boton.onclick = function(){
	
	var nombre =  /[a-zA-Z]/;
	var apellido = /[a-zA-Z]/;
	var pais = /[a-zA-Z]/;
	var correo = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
	var genero = /[a-zA-Z]/;
	var mensaje = /[a-zA-Z]/;
		var nom = document.getElementById("nombre");
		var no = nom.value;
		var ape = document.getElementById("apellido");
		var ap = ape.value;
		var pai = document.getElementById("paises");
		var pa = pai.value;
		var cor = document.getElementById("correo");
		var co = cor.value;
		var gen = document.getElementById("genero");
		var ge = gen.value;
		var men = document.getElementById("mensaje");
		var me = men.value;
		
if (no.match(nombre))
{ 
alert("esta bien el nombre");
a =1;

}
else{
	alert("Ingrese bien el nombre");
	}
 if(ap.match(apellido))
{
alert("esta bien el apellido");
b =1;
}
else{
	alert("Ingrese bien el apellido");
	}

if(pa.match(pais)){
alert("esta bien el pais");
c =1;
}
else{
	alert("la regue");
	}
 if(co.match(correo)){
	alert("esta bien el correo");
d =1;
	}
	
	else{
	alert("Ingrese bien el Correo");
	}
 if(ge.match(genero)){
		alert("esta bien el genero");
e = 1;		} 
		else{
	alert("la regue");
	}
if(me.match(mensaje)){
			alert("esta bien el mensaje");		
f=1;							 			 
					 }
					 else{
						 alert("Ingrese bien los datos");}
						 }
}