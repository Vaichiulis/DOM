"use strict";

let staciakampis = {
    krastinea: 0,
    krastineb: 0,
   
    plotas: function(a,b){
        this.krastinea = a;
        this.krastineb = b;
        let plotas = 0;
        plotas = a*b;
        
        return plotas;
    },
    perimetras: function(a,b){
        this.krastinea = a;
        this.krastineb = b;
        let perimetras = 0;
        perimetras = 2*a+2*b;
        
       return perimetras;
    },
    istrizaine: function(a,b){
        this.krastinea = a;
        this.krastineb = b;
        let istrizaine = 0;
        let kvadratsuma = a*a+b*b;
             
        for(let i = 1; i <= kvadratsuma; i++){
            if(i*i == kvadratsuma){istrizaine = i}
        }        
       return istrizaine;
    },   
    
}
console.log(staciakampis.plotas (3,4));
console.log(staciakampis.perimetras (3,4));
console.log(staciakampis.istrizaine (3,4));



document.querySelector("p").innerHTML = staciakampis.plotas (3,4);
document.querySelector("p").innerHTML += "<br>";
document.querySelector("p").innerHTML += staciakampis.perimetras (3,4);  
document.querySelector("p").innerHTML += "<br>";
document.querySelector("p").innerHTML += staciakampis.istrizaine (3,4);  