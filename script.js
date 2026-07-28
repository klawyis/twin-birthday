const text = document.getElementById("text");
const startButton = document.getElementById("startButton");
const blackScreen = document.getElementById("blackScreen");

const messages = [

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren",

"yegâne insansın.",

"Ve nice mutlu senelere...",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun Twin.",

"(JoJo başla)",

"I LOVE YOU TWIN"

];

const typingSpeed = 45;

const readingTime = 2200;

function wait(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}

async function typeWriter(sentence){

text.innerHTML="";

text.className="fadeIn";

for(let i=0;i<sentence.length;i++){

text.innerHTML+=sentence.charAt(i);

await wait(typingSpeed);

}

}

async function showMessages(){

for(let i=0;i<messages.length;i++){

await typeWriter(messages[i]);

if(messages[i]=="(JoJo başla)"){

music.currentTime=0;

music.play();

}

if(messages[i]=="I LOVE YOU TWIN"){

text.style.fontSize="82px";

text.style.fontWeight="700";

}

await wait(readingTime);

text.className="fadeOut";

await wait(1300);

}

blackScreen.style.opacity="1";

}
