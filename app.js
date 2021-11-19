
let input = document.getElementById("enterANumber");
let num1 = document.getElementById("n1");
let num2 = document.getElementById("n2");
let num3 = document.getElementById("n3");
let num4 = document.getElementById("n4");
let num5 = document.getElementById("n5");
let num6 = document.getElementById("n6");
let num7 = document.getElementById("n7");
let num8 = document.getElementById("n8");
let num9 = document.getElementById("n9");
let num0 = document.getElementById("n0");
let opePlus = document.getElementById("n+");
let opeLess = document.getElementById("n-");
let opeMulti = document.getElementById("n*");
let opeDivi = document.getElementById("n%");
let opeEgal = document.getElementById("n=");

num1.addEventListener("click", function () {
    input.value += 1;
})

num2.addEventListener("click", function (){
    input.value += 2;
})

num3.addEventListener("click", function (){
    input.value += 3;
})

num4.addEventListener("click", function (){
    input.value += 4;
})

num5.addEventListener("click", function (){
    input.value += 5;
})

num6.addEventListener("click", function (){
    input.value += 6;
})

num7.addEventListener("click", function (){
    input.value += 7;
})

num8.addEventListener("click", function (){
    input.value += 8;
})

num9.addEventListener("click", function (){
    input.value += 9;
})

num0.addEventListener("click", function (){
    input.value += 0;
})

opePlus.addEventListener("click", function (){
    input.value += "+";
})

opeLess.addEventListener("click",  function (){
    input.value += "-";
})

opeMulti.addEventListener("click", function (){
    input.value += "*";
})

opeDivi.addEventListener("click", function (){
    input.value += "%";
})

opeEgal.addEventListener("click", function () {

})

