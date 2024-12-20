function coucou()
{

var x;
var y;
var z;
var a1=document.getElementById("a1").value;
var a2=document.getElementById("a2").value;
var a3=document.getElementById("a3").value;
var b1=document.getElementById("b1").value;
var b2=document.getElementById("b2").value;
var b3=document.getElementById("b3").value;
var c1=document.getElementById("c1").value;
var c2=document.getElementById("c2").value;
var c3=document.getElementById("c3").value;
var d1=document.getElementById("d1").value;
var d2=document.getElementById("d2").value;
var d3=document.getElementById("d3").value;

var det=(a1*b2*c3)-(a1*c2*b3)-(b1*a2*c3)+(b1*c2*a3)+(c1*a2*b3)-(c1*b2*a3);

//var det=((a1*(b2*(c3-c2)*b3))-(b1*(a2*(c3-a3)*c2))+(c1*(a2*(b3-a3)*b2)));
if(det==0)
{
alert("Aucune solution");
}
else
{
/*x=((d1*(b2*(c3-c2)*b3)-b1*(d2*(c3-d3)*c2)+c1*(d2*(b3-d3)*b2)))/(det);
y=((a1*(d2*(c3-c2)*d3)-d1*(a2*(c3-a3)*c2)+c1*(a2*(d3-a3)*d2)))/(det);
z=((a1*(b2*(d3-d2)*b3)-b1*(a2*(d3-a3)*d2)+d1*(a2*(b3-a3)*b2)))/(det);
alert("X="+x) ;
alert("Y="+y) ;
alert("Z="+z) ;
}
}*/


detX=parseInt((d1*b2*c3)-(d1*c2*b3)-(b1*d2*c3)+(b1*c2*d3)+(c1*d2*b3)-(c1*b2*d3));
x=parseInt(detX/det);
detY=((a1*d2*c3)-(a1*c2*d3)-(d1*a2*c3)+(d1*c2*a3)+(c1*a2*d3)-(c1*d2*a3));
y=parseInt(detY/det);
detZ=parseInt((a1*b2*d3)-(a1*d2*b3)-(b1*a2*d3)+(b1*d2*a3)+(d1*a2*b3)-(d1*b2*a3));
z=parseInt(detZ/det);
alert("x= "+x);
alert("y= "+y);
alert("z= "+z);


}
}