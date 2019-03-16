let mult2 = document.getElementById("btn1");
let mult3 = document.getElementById("btn2");
let mult4 = document.getElementById("btn3");
let mult5 = document.getElementById("btn4");
let mult6 = document.getElementById("btn5");
let mult7 = document.getElementById("btn6");
let mult8 = document.getElementById("btn7");
let mult9 = document.getElementById("btn8");
let num_primos = document.getElementById("btnprimos");
let limpiar = document.getElementById("btnlimpiar");


let num = prompt("Por favor indica un número mayor o igual a 20: ");
if(num >= 20){
   btncrear();
}else{}
function btncrear(){
    for(i=1; i <= num; i++){
        let boton = document.createElement("input");
        //Atributos de mi boton
        boton.id = "boton_"+i;
        boton.type = "button";
        boton.value = ""+i;



document.getElementById("cboton").appendChild(boton);
document.getElementById("boton_"+i).style.height = "60px";
document.getElementById("boton_"+i).style.width = "60px";
document.getElementById("boton_"+i).style.backgroundColor = "#CC0066";
document.getElementById("boton_"+i).style.border = "1px";
document.getElementById("boton_"+i).style.marginLeft = "5px";
document.getElementById("boton_"+i).style.marginBottom = "5px";
    }}
let numOcup = [];
let numP = [];
document.getElementById("boton_1").style.backgroundColor = "#CC3366";

mult2.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 2 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#99FF33";
            numOcup.push(i);
        }}}
mult3.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 3 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#FFFF66";
            numOcup.push(i);
        }}}
mult4.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 4 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#996633";
            numOcup.push(i);
        }}}
mult5.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 5 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#FF0099";
            numOcup.push(i);
        }}}
mult6.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 6 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#CCFCCC";
            numOcup.push(i);
        }}}
mult7.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 7 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#CC33FF";
            
            numOcup.push(i);
        }}}
mult8.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 8 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#00CCCC";
            numOcup.push(i);
 			}}}
mult9.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 9 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#33FF99";
            numOcup.push(i);
            }}}
function primos(){
let contador = 0;
let numActual = 0;
let numd = 0;

	 for(i=2; i <= num; i++){
        numActual = i;    
        for(j = 1; j <= numActual; j++){
           
            if(i % j == 0){
                contador++;
            }}
        if(contador == 2 && numPrimos.includes(i) == false){
            contador = 0;
            document.getElementById("button_"+i).style.backgroundColor = "#0033FF";
            document.getElementById("button_"+i).style.color = "#0003FF";
            numPrimos.push(i);
            numOcupados.push(i);
        }else if(contador > 2){
            contador = 0;
        }}}
limpiar.onclick = function(){
    for(i=1; i <= num; i++){
            document.getElementById("boton_"+i).style.backgroundColor = "#FFF6AC";
            document.getElementById("boton_"+i).style.color = "#CCCCFF";
            numOcup.splice(0,num);
            numP.splice(0,num);
    }
    document.getElementById("boton_1").style.backgroundColor = "#1c0f94";
}