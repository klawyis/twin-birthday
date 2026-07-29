const gift = document.getElementById("gift");
const giftScreen = document.getElementById("giftScreen");
const kisuke = document.getElementById("kisuke");

const text = document.getElementById("text");
const buttons = document.getElementById("buttons");


const messages = [
    "Twin...",
    "Uzakta olduğum için elimden anca bu geldi.",
    "2 yıldır hayatımı güzelleştiren yegane insansın.",
    "Ve nice mutlu senelere..",
    "Yada daha iyisi...",
    "Nice bizli senelere diyorum.",
    "İyi ki doğdun twin 💚"
];



function wait(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}




async function writeText(message){

    text.innerHTML = "";
    
    text.classList.remove("fade");
    void text.offsetWidth;
    text.classList.add("fade");


    for(let i = 0; i < message.length; i++){

        text.innerHTML += message[i];

        await wait(60);

    }


    await wait(2000);

}





async function start(){

    for(let i = 0; i < messages.length; i++){

        await writeText(messages[i]);

    }


    askLove();

}






function askLove(){


    text.innerHTML = "Beni seviyor musun Twin? 💚";


    buttons.innerHTML = `
    
    <button id="yes">
    EVET 💚
    </button>

    <button id="no">
    HAYIR 😈
    </button>
    
    `;



    const yes = document.getElementById("yes");
    const no = document.getElementById("no");



    function moveNo(){

        no.style.position = "fixed";

        no.style.left = Math.random()*80 + "%";

        no.style.top = Math.random()*80 + "%";

    }



    no.addEventListener("mouseenter", moveNo);

    no.addEventListener("touchstart", moveNo);

    no.addEventListener("click", moveNo);





    yes.onclick = function(){


        buttons.innerHTML = "";

        text.innerHTML = "BİLİYORDUM TWIN 😎💚";


        createHearts();



        setTimeout(function(){

            text.innerHTML = "I LOVE YOU TWIN 💚";

        },2500);



        setTimeout(function(){

            document.body.style.transition = "3s";

            document.body.style.opacity = "0";

        },6000);



    };

}







function createHearts(){


    for(let i = 0; i < 80; i++){


        let heart = document.createElement("div");


        heart.className = "heart";


        heart.innerHTML = "💚";


        heart.style.left = Math.random()*100 + "%";


        heart.style.animationDuration =
        (Math.random()*4+4)+"s";


        document.body.appendChild(heart);



        setTimeout(function(){

            heart.remove();

        },8000);


    }

}







let opened = false;


function openGift(){


    if(opened) return;


    opened = true;


    gift.classList.add("open");



    setTimeout(function(){


        giftScreen.classList.add("hide");


        if(kisuke){

            kisuke.classList.add("show");

        }



        setTimeout(function(){

            start();

        },1500);



    },1000);


}





gift.addEventListener("click", openGift);


gift.addEventListener("touchend", openGift);
