function calcul() 
{

	var r1 = parseFloat(document.getElementById("R1").value);
	var r2 = parseFloat(document.getElementById("R2").value);
	var r3 = parseFloat(document.getElementById("R3").value);
	var r4 = parseFloat(document.getElementById("R4").value);
	var U = parseFloat(document.getElementById("U").value);

	//var r1 = parseFloat(prompt("Entrer r1")) ;
	//var r2 = parseFloat(prompt("Entrer r2")) ;
	

	//var r1=document.getElementById("R1").value;
	//var r2=document.getElementById("R2").value;

	//alert(" C = " +parseFloat(1/(r1+r2))) ; 


	var rEq = parseFloat(((r3*r2)/(r3+r2))+r1+r4);
	var I = parseFloat(U/rEq) ;

	var u1= parseFloat(I*r1); 
	//var i1= I;
	var u4 = parseFloat(I*r4);
	var u2 = parseFloat(U-u1-u4);
	var i2 = parseFloat(u2/r2);
	var i3 = parseFloat(I-i2);
	var u3 = parseFloat(i3*r3);	
	//var u4 = paresFloat(r4*I);
	//var i4 = I;
	alert("U1="+u1.toFixed(2)+" I1= "+I.toFixed(2)); 
	alert("U2="+u2.toFixed(2)+" I2= "+i2.toFixed(2)); 
	alert("U3="+u3.toFixed(2)+" I3= "+i3.toFixed(2)); 
	alert("U4="+u4.toFixed(2)+" I4= "+I.toFixed(2)); 
	//document.write(u4); 

	

}

