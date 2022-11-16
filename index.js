const button=document.querySelector(".btn");

button.addEventListener("click",function()
{
    function randomNum(max,min)
{
   return Math.floor(Math.random()* (max-min+1)+min);
};
const red= randomNum(0,255);
const green=randomNum(0,255);
const blue=randomNum(0,255);
document.body.style.backgroundColor=`rgb( ${red}, ${green}, ${blue} )`;
button.innerText="rgb"+ "(" +red+ "," +green+ "," +blue+ ")";
});




