const hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){
//choose a random color between 0 to 3
//first we take a hard coded value
let hexcolor="#";
for(let i=0;i<6;i++){
    hexcolor+=hex[getRandomNumber()];
}
document.body.style.backgroundColor=hexcolor;
color.textContent=hexcolor; 
});
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}