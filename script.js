const text=document.getElementById("text");

const buttons=document.getElementById("buttons");



// Yazılar


const messages=[

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Nice mutlu senelere...",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun Twin 💚"

];



function wait(ms){

return new Promise(r=>setTimeout(r,ms));

}



async function write(msg){


text.innerHTML="";

text.className="fade";


for(let char of msg){

text.innerHTML+=char;

await wait(60);


}


await wait(2500);


}



async function start(){


for(let m of messages){

await write(m);

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



let yes=document.getElementById("yes");

let no=document.getElementById("no");



no.onmouseover=function(){


no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";


};



yes.onclick=function(){


buttons.innerHTML="";


text.innerHTML="BİLİYORDUM TWIN 😎💚";


setTimeout(()=>{


text.innerHTML="I LOVE YOU TWIN 💚";


},2500);


};



}



start();




// kalp yağmuru


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="💚";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=

(Math.random()*3+3)+"s";



document.getElementById("hearts").appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



},300);
