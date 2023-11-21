//creat object
/*
var st={
    name: "ibrahim",
    roll: "45",
    lan:["bang","eng"],
}
document.write(st.name);
document.write(st.lan[1]);
document.write(st.name);*/
// creat 
/*
function Personal(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
}
var student= new Personal("Md ibrahim", 25, 3.14,["bangla","english"]);
document.write(student.age);
*/
// maximum number 
/*
var num1= parseInt(prompt("enter number 1="));
var num2= parseInt(prompt("enter number 2="));
var maximum= Math.max(num1,num2);
document.write("this is maximaum"+ maximum);
*/
// random number
/*
document.write(Math.random()*5)
document.write(Math.floor(Math.random()*10))+10;
*/
//game

/*
var lost=0;
var win=0;
for(var i=1; i<=5; i++)
{
    var sport=parseInt(prompt("enter number 1 to 5="));
    var randomnumber= Math.floor(Math.random()*5)+3;
    if (sport== randomnumber)
    {
        console.log("you are win=");

    win++;
    }
    else
    {
        console.log("you are lost=");
        lost++
    }
}
document.write("total number of win=" + win + "<br>");
document.write("total number of lost=" + lost );
*/
//date and time
/*var date= new Date();
document.write(date  + "<br>");
var year= date.getFullYear();
document.write(year   + "<br>");
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();

document.write(h);  
document.write(":");  

document.write(m); 
document.write(":");  
document.write(s); 
*/
//Element id ,tag ,class 
 //document.getElementById("a").innerHTML="bangladesh";
 //cument.getElementsByTagName("h1")[].innerHTML="hi";
 var img= document.querySelector("#ma");
 
 document.write(para);
 function pic1()
 {
img.src= "ma1.jpg";
 }
 function pic2()
 {

img.src= "ma2.jpg";

 }