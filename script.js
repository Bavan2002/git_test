var answer = document.getElementById("answer");
var numbers = document.getElementsByClassName("numbers");
var ops = document.getElementsByClassName("ops");
var equal = document.getElementById("item18");
var cle = document.getElementById("item19");
var dele = document.getElementById("item20");
var dottt = document.getElementById("item16");
var zero = document.getElementById("item15")
var plormi = document.getElementById("item14");
var textarray = [];
var opsarray = [];

window.addEventListener("keypress",function(event){
    if(event.key == "0"){
        clickzero();        
    }else if(event.key == "."){
        clickdot();
    }else if(event.key == "c"){
        clear();
    }else if(event.key == "d"){
        del();
    }else if(event.key == "="){
        clickequal();
    }
    for(let i=1; i<10; i++){
        if(event.key == `${i}`){
            if (text=="0"){
                text="";
            }
            text +=numbers[i-1].innerText;
            answer.innerHTML=text;
        }
    }
    for(let i=0; i < ops.length; i++){
        k = ops[i].innerText;
        if(event.key == `${k}`){
            opsarray.push(i);
            textarray.push(text);
            answer.innerHTML="";
            text="";
        }        
    }   
});



text="";
for (let i=0; i < numbers.length; i++){
        function click(){
            if (text=="0"){
                text="";
            }
            text +=numbers[i].innerText;
            answer.innerHTML=text;
        } 
        numbers[i].onclick = click;
    }

function clickzero(){
    if (text=="0"){
        text = "0";
    }else{
        text += "0";
    } 
    answer.innerHTML=text;
}

zero.onclick = clickzero;

function clickdot(){
    if (text==""){
        text = "0.";
    }else{
        text += ".";
    } 
    answer.innerHTML=text;

}

dottt.onclick = clickdot;

function clickplusorminus(){
    if(parseFloat(text)>0){
        text = "-"+text;
    }else if(parseFloat(text)==0){
        text = "0";
    }else{
        text = text.slice(1);
    }
    answer.innerHTML=text;
}

plormi.onclick = clickplusorminus;

for(let i=0; i < ops.length; i++){
    function clickops(){
        opsarray.push(i);
        textarray.push(text);
        answer.innerHTML="";
        text="";
    }
    ops[i].onclick = clickops;
}

function clickequal(){
    textarray.push(text);
    textarray.reverse();
    var n1  = textarray[1];
    var n2  = textarray[0];
    var num1  = parseFloat(n1);
    var num2  = parseFloat(n2);
    opsarray.reverse();
    var ops1 = opsarray[0];
    if (ops1==0){
        var num3 = num1/num2;
    }else if(ops1==1){
        var num3 = num1*num2;
    }else if(ops1==2){
        var num3 = num1-num2;
        
    }else{
        var num3 = num1+num2;
    }
    
    answer.innerHTML = num3 ;
    textarray.reverse();
    text = num3;
}

equal.onclick = clickequal;

function clear(){
    text = ""
    answer.innerHTML= "";
    textarray = [];
    opsarray = [];
}

cle.onclick = clear;

function del(){
    text = text.slice(0,-1);
    answer.innerHTML = text;
}

dele.onclick = del;






