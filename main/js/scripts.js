function op(){
	
	var num1 = parseInt(document.getElementById("num1").value);
    var den1 = parseInt(document.getElementById("den1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var den2 = parseInt(document.getElementById("den2").value);
	
	var arr1 = new Array();
	var arr2 = new Array();
	
	var inicio = 0;
	var aumento = 1;
	while(inicio<30){
	  var d1 = den1*aumento;
	  var d2 = den2*aumento;
	  arr1.push(d1+"  ");
	  arr2.push(d2+"  ");
      aumento++;
	  inicio++;
	}
	
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
	
	alert(arr1);
	alert(arr2);
	alert(mcm);
}


