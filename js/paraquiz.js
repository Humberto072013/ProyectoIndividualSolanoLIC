// JavaScript Document
var a,b,c,d,e = 0;
window.onload = function(){
	var frm = document.getElementById("frm");
	var boton  = document.getElementById("botonQuiz");
	boton.onclick = function(){

		llenar(frm);
		}
	}
	
	
function llenar(Datos){
	var resp = new Object();

	resp.resp1 = document.frm.equipo.value;
	resp.resp2 = document.frm.MVP.value;
	resp.resp3 = document.frm.defensa.value;
	resp.resp4 = document.frm.anotador.value
	resp.resp5 = document.frm.triple.value;

	resultado();

		}
		
		function resultado(){
	
			if(resp.resp1 == "boston"){

				a = 1;
				}
				else{
					a = 0;
					alert(resp.resp1);
					}
			
			if(resp.resp2 == "Lebron James"){
				b = 1;
				}
				else{
					b = 0;
					}
					
			if(resp.resp3 == "Hakeem Olajuwon"){
				c = 1;
				}
				else{
					c = 0;
					}
					
					if(resp.resp4 == "Wilt Chamberlain"){
				d = 1;
				}
				else{
					d = 0;
					}
					
			if(resp.resp5 =="Leonard"){
				e = 1;
				}
				else{
					e = 0;
					}
					
			var aciertos = (a + b + c +d+ e) * 2;
			
			alert("SU puntaje es " + aciertos);
				}
				
				