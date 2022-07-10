

"use strict"; //naudoti grieztai

let ivedamas = 0;
let masyvas = [];

document.querySelector("#ivesti").addEventListener("click", function() {
    

    ivedamas = parseInt(document.querySelector("#ivedamas").value);

    masyvas.push(ivedamas);

    console.log(masyvas);

});


let skaicius = 0;  
function saknis (skaicius){
let ats = 0;
for(let i = 1; i<skaicius; i++){
    if(i*i == skaicius) {ats = i}
} 
    return ats; 
}
let ats;
ats = saknis(64)
console.log(ats)


let suma = 0;
document.querySelector("#sukurti").addEventListener("click", function spausdintuvas() {
   skaicius = parseInt(document.querySelector("#kiekdiv").value);
    for(let i = 1; i<=skaicius; i++){
        suma += i;   
        document.querySelector(".main").innerHTML += "<div class=" + i + ">Labas</div>";}
});
