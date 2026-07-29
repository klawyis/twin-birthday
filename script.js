const text = document.getElementById("text");
const buttons = document.getElementById("buttons");



const messages = [

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Nice mutlu senelere...",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun Twin 💚"

];




// Bekleme fonksiyonu

function wait(ms){

return new Promise(resolve => setTimeout(resolve, ms));

}





// Yazı yazma efekti

async function write(message){


text.innerHTML="";


text.className="fade";



for(let i=0;i<message.length;i++){


text.innerHTML += message[i];


await wait(60);


}



await wait(2500);


}





// Ana başlangıç

async function start(){


for(let message of messages){


await write(message);


}



loveQuestion();


}







// Seviyor musun ekranı

function loveQuestion(){



text.className="fade";


text.innerHTML=
"Beni seviyor musun Twin? 💚";



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





// Hayır butonu kaçıyor

function escapeButton(){



let x=Math.random()*75;

let y=Math.random()*75;



no.style.position="absolute";


no.style.left=x+"%";


no.style.top=y+"%";



}



no.addEventListener(
"mouseenter",
escapeButton
);



no.addEventListener(
"click",
escapeButton
);







// Evet butonu

yes.onclick=function(){



buttons.innerHTML="";


text.innerHTML=
"BİLİYORDUM TWIN 😎💚";



heartExplosion();




setTimeout(()=>{


text.innerHTML=
"I LOVE YOU TWIN 💚";


},2500);




setTimeout(()=>{


document.body.style.transition="3s";


document.body.style.opacity="0";


},6500);



};





}









// Kalp patlaması

function heartExplosion(){



for(let i=0;i<60;i++){



let heart=document.createElement("div");


heart.innerHTML="💚";



heart.style.position="absolute";


heart.style.left=
Math.random()*100+"%";



heart.style.top=
Math.random()*100+"%";



heart.style.fontSize=
(Math.random()*20+15)+"px";



heart.style.animation=
"fall 3s linear";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},3000);



}



}








// Sayfa başlat

start();
