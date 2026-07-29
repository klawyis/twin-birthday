const kisuke = document.getElementById("kisuke");
const gift=document.getElementById("gift");

const giftScreen=document.getElementById("giftScreen");


const text=document.getElementById("text");

const buttons=document.getElementById("buttons");



const messages=[

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Nice mutlu senelere..",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun twin 💚"

];



function wait(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}



async function write(msg){


text.innerHTML="";


text.classList.add("fade");



for(let i=0;i<msg.length;i++){


text.innerHTML+=msg[i];


await wait(60);


}


await wait(2000);


}





async function start(){


for(let m of messages){


await write(m);


}



question();


}







function question(){


text.innerHTML="Beni seviyor musun Twin? 💚";


buttons.innerHTML=`

<button id="yes">
EVET 💚
</button>


<button id="no">
HAYIR 😈
</button>

`;



let yes=document.getElementById("yes");

let no=document.getElementById("no");



function escapeNo(){


no.style.position="fixed";


no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";


}



no.onmouseenter=escapeNo;

no.onclick=escapeNo;




yes.onclick=function(){


buttons.innerHTML="";


text.innerHTML="BİLİYORDUM TWIN 😎💚";


function hearts(){


for(let i=0;i<80;i++){


let h=document.createElement("div");


h.className="heart";


h.innerHTML="💚";



h.style.left =
Math.random()*100+"%";



h.style.fontSize =
(Math.random()*25+15)+"px";



h.style.animationDuration =
(Math.random()*4+4)+"s";



h.style.animationDelay =
Math.random()*3+"s";



document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},8000);



}



}





function hearts(){


for(let i=0;i<70;i++){


let h=document.createElement("div");


h.className="heart";


h.innerHTML="💚";


h.style.left=Math.random()*100+"%";


h.style.top="0px";


document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},4000);


}



}







gift.onclick=function(){


gift.classList.add("open");



setTimeout(()=>{


giftScreen.classList.add("hide");



kisuke.classList.add("show");



setTimeout(()=>{


start();


},1500);



},1000);



};
