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



function wait(time){

    return new Promise(function(resolve){

        setTimeout(resolve,time);

    });

}





async function typeText(message){

    text.innerHTML = "";

    text.classList.remove("fade");

    void text.offsetWidth;

    text.classList.add("fade");



    for(let i = 0; i < message.length; i++){

        text.innerHTML += message[i];

        await wait(65);

    }


    await wait(2500);

}






async function startStory(){


    for(let i = 0; i < messages.length; i++){

        await typeText(messages[i]);

    }


    loveQuestion();


}







function loveQuestion(){


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





    function escapeNo(){


        no.style.position = "fixed";


        no.style.left =
        Math.random() * 75 + "%";


        no.style.top =
        Math.random() * 75 + "%";


    }





    no.addEventListener(
        "mouseenter",
        escapeNo
    );


    no.addEventListener(
        "touchstart",
        escapeNo
    );


    no.addEventListener(
        "click",
        escapeNo
    );






    yes.addEventListener(
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


            },6500);



        }
    );



}








function createHearts(){


    for(let i = 0; i < 100; i++){


        let heart = document.createElement("div");


        heart.className = "heart";


        heart.innerHTML = "💚";



        heart.style.left =
        Math.random()*100 + "%";



        heart.style.fontSize =
        (Math.random()*20+15)+"px";



        heart.style.animationDuration =
        (Math.random()*3+4)+"s";



        document.body.appendChild(heart);




        setTimeout(function(){


            heart.remove();


        },7000);



    }


}







let opened = false;



function openGift(){


    if(opened){

        return;

    }



    opened = true;



    gift.classList.add("open");




    setTimeout(function(){


        giftScreen.classList.add("hide");



        if(kisuke){


            kisuke.classList.add("show");


        }




        setTimeout(function(){


            startStory();


        },1500);



    },1000);



}







if(gift){


    gift.addEventListener(
        "click",
        openGift
    );


    gift.addEventListener(
        "touchend",
        openGift
    );


}
