const text = document.getElementById("text");
const startButton = document.getElementById("startButton");
const blackScreen = document.getElementById("blackScreen");


const messages = [

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Ve nice mutlu senelere..",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyiki doğdun twin.",

"(JoJo başla)",

"I LOVE YOU TWIN"

];


function wait(ms){

return new Promise(resolve => setTimeout(resolve,ms));

}



async function typeWriter(sentence){

text.innerHTML = "";

text.className="fadeIn";


for(let i=0;i<sentence.length;i++){

text.innerHTML += sentence[i];

await wait(70);

}

}



async function showMessages(){


for(let i=0;i<messages.length;i++){


await typeWriter(messages[i]);


await wait(2500);



text.className="fadeOut";


await wait(1200);


}



blackScreen.style.opacity="1";


}



startButton.onclick=function(){

startButton.style.display="none";

showMessages();

};
