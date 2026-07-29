const text = document.getElementById("text");
const buttons = document.getElementById("buttons");

const gift = document.getElementById("gift");
const giftScreen = document.getElementById("giftScreen");



const messages = [

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Ve nice mutlu senelere..",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun Twin 💚"

];



function wait(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}




async function write(message){


text.innerHTML="";


text.classList.remove("fade");


void text.offsetWidth;


text.classList.add("fade");



for(let char of message){


text.innerHTML += char;


await wait(60);


}


await wait(2500);


}




async function start(){


for(let message of messages){


await write(message);


}



loveQuestion();


}






function loveQuestion(){



text.innerHTML="Beni seviyor musun Twin? 💚";



buttons.innerHTML=`

<button id="yes">
EVET 💚
</button>


<button id="no">
HAYIR 😈
</button>

`;



const yes=document.getElementById("yes");

const no=document.getElementById("no");





function moveNo(){


no.style.position="fixed";


no.style.left=
Math.random()*80+"%";


no.style.top=
Math.random()*80+"%";


}



no.addEventListener(
"mouseenter",
moveNo
);



no.addEventListener(
"click",
moveNo
);





yes.onclick=function(){


buttons.innerHTML="";


text.innerHTML="BİLİYORDUM TWIN 😎💚";


heartExplosion();



setTimeout(()=>{


text.innerHTML="I LOVE YOU TWIN 💚";


},2500);



setTimeout(()=>{


document.body.style.transition="3s";


document.body.style.opacity="0";


},6000);



};


}







function heartExplosion(){


for(let i=0;i<50;i++){


let h=document.createElement("div");


h.innerHTML="💚";


h.style.position="fixed";


h.style.left=Math.random()*100+"%";


h.style.top=Math.random()*100+"%";


h.style.fontSize="30px";


h.style.animation="fall 3s linear";


document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},3000);


}


}








// HEDİYE KUTUSU

gift.onclick=function(){



gift.classList.add("open");



setTimeout(()=>{


giftScreen.classList.add("hide");



setTimeout(()=>{


start();


},1500);



},1000);



};
