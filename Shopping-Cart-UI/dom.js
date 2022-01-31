let prix = document.querySelectorAll(".prix" );
console.log (prix);
//prix de chaque article//
let count = document.querySelectorAll(".count");
console.log (count);
//quantité de chaque article 
let amount = document.querySelectorAll(".amount");
console.log (amount);
let btnPlus= document.querySelectorAll(".btnPlus");
let btnMoins= document.querySelectorAll(".btnMoins");
console.log (btnPlus + " " + btnMoins);

for( let i = 0 ;i < btnPlus.length;i++){
    btnPlus[i].addEventListener("click", function(){
    }
    )
}