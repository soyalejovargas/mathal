function op(){
	
	var num1 = parseInt(document.getElementById("num1").value);
    var den1 = parseInt(document.getElementById("den1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var den2 = parseInt(document.getElementById("den2").value);
	var caja = document.getElementById("resultado");
	
	var arr1 = new Array();
	var arr2 = new Array();
	
	/* Multiplicamos 20 veces cada denominador
	   para luego encontrar el mcm entre ambos */
	   
	var inicio = 0;
	var aumento = 1;
	while(inicio < 20){
	  var d1 = den1*aumento;
	  var d2 = den2*aumento;
	  arr1.push("  "+d1);
	  arr2.push("  "+d2);
      aumento++;
	  inicio++;
	}
	
	/* Recorrer los dos array para encontrar
	   la primera similitud, el mcm */
	
	var mcm;
	var contador = 0;
	for(var i=0; i<arr1.length; i++){
	  for(var j=0; j<arr2.length; j++){
		if(arr1[i]==arr2[j]){
		  contador++;
		   if(contador==1){
			 mcm=arr1[i];
		   }
		}
      }
	} 
	
	/*1ra impresion inner con los resultados previos*/
	
    caja.innerHTML = `
	<h2>Metodo 1: Por minimo comun multiplo.</h2>
	<h3>Sacamos el minimo comun multiplo de los denominadores, un multiplo comun entre ${den1+" y "+den2+"."}</h3>
	<h3>Multiplos de: ${den1+"."}</h3>
    <p>${arr1}</p>
    <h3>Multiplos de: ${den2+"."}</h3>
	<p>${arr2}</p>
	<h3>El m.c.m es:</h3>
	<p>${mcm}</p>
    `;
	
	var a = 2;
	var div1 = den1;
	var div2 = den2;
	var x1 = new Array();
	var x2 = new Array();
	var x3 = new Array();
	
	while(div1>1){
		div1 = div1/a;
		if(div1 % 1 == 0){
			a = 2;
			x1.push(div1);
			x2.push(a);
			// Es entero
		}
		else{
		   div1 = div1*a;
		   a++;	
		   if(div1==a){
			 a=div1;
			 div1=1; 
			 x1.push(div1);
			 x2.push(a);
			 
		   }
		}
	}	
	alert(x2+"   "+x1);
	
}


