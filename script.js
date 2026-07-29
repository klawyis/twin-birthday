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
    "İyi ki doğdun twin 💚"
];



function wait(time){

    return new Promise(function(resolve){

        setTimeout(resolve,time);

    });

}




async function writeText(message){

    text.innerHTML = "";

    text.classList.remove("fade");

    void text.offsetWidth;

    text.classList.add("fade");


    for(let i = 0; i < message.length; i++){

        text.innerHTML += message[i];

        await wait(70);

    }


    await wait(2000);

}





async function startStory(){


    for(let i = 0; i < messages.length; i++){

        await writeText(messages[i]);

    }


    askLove();


}






function askLove(){


    text.innerHTML = "Beni seviyor musun Twin? 💚";


    buttons.innerHTML = 
    `
    <button id="yes">
    EVET 💚
    </button>

    <button id="no">
    HAYIR 😈
    </button>
    `;



    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");



    function moveNoButton(){


        noButton.style.position = "fixed";


        noButton.style.left =
        Math.random() * 80 + "%";


        noButton.style.top =
        Math.random() * 80 + "%";


    }



    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    noButton.addEventListener(
        "click",
        moveNoButton
    );





    yesButton.addEventListener(
        "click",
        function(){


            buttons.innerHTML = "";


            text.innerHTML =
            "BİLİYORDUM TWIN 😎💚";


            createHearts();



            setTimeout(function(){


                text.innerHTML =
                "I LOVE YOU TWIN 💚";


            },2500);



            setTimeout(function(){


                document.body.style.transition =
                "3s";


                document.body.style.opacity =
                "0";


            },6000);



        }
    );



}








function createHearts(){


    for(let i = 0; i < 60; i++){


        let heart =
        document.createElement("div");


        heart.innerHTML = "💚";


        heart.style.position = "fixed";


        heart.style.left =
        Math.random()*100 + "%";


        heart.style.top =
        Math.random()*100 + "%";


        heart.style.fontSize =
        "30px";


        heart.style.animation =
        "fall 3s linear";


        document.body.appendChild(heart);



        setTimeout(function(){

            heart.remove();

        },3000);



    }


}









// HEDİYE KUTUSU AÇILIŞI


gift.addEventListener(
    "click",
    function(){


        gift.classList.add("open");



        setTimeout(function(){


            giftScreen.classList.add("hide");



            setTimeout(function(){


                startStory();


            },1500);



        },1000);



    }
);
