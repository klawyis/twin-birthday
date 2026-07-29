// ===============================
// ELEMENTLERİ ALIYORUZ
// ===============================


const gift = document.getElementById("gift");

const giftScreen = document.getElementById("giftScreen");

const kisuke = document.getElementById("kisuke");

const text = document.getElementById("text");

const buttons = document.getElementById("buttons");



// ===============================
// YAZILAR
// ===============================


const messages = [

"Twin...",

"Uzakta olduğum için elimden anca bu geldi.",

"2 yıldır hayatımı güzelleştiren yegane insansın.",

"Ve nice mutlu senelere..",

"Yada daha iyisi...",

"Nice bizli senelere diyorum.",

"İyi ki doğdun twin 💚"

];





// ===============================
// BEKLEME FONKSİYONU
// ===============================


function sleep(ms){

    return new Promise(function(resolve){

        setTimeout(resolve,ms);

    });

}





// ===============================
// YAZI ANİMASYONU
// ===============================


async function showText(message){


    text.innerHTML = "";


    text.classList.remove("fade");


    void text.offsetWidth;


    text.classList.add("fade");



    for(
        let i = 0;
        i < message.length;
        i++
    ){


        text.innerHTML += message[i];


        await sleep(70);


    }



    await sleep(2500);



}







// ===============================
// TÜM HİKAYE
// ===============================


async function startStory(){


    for(
        let i = 0;
        i < messages.length;
        i++
    ){


        await showText(messages[i]);


    }



    showQuestion();



}








// ===============================
// SEVİYOR MUSUN KISMI
// ===============================


function showQuestion(){



    text.innerHTML =
    "Beni seviyor musun Twin? 💚";



    buttons.innerHTML = `

    <button id="yes">

    EVET 💚

    </button>



    <button id="no">

    HAYIR 😈

    </button>

    `;





    const yes =
    document.getElementById("yes");



    const no =
    document.getElementById("no");






    function moveNo(){



        no.style.position =
        "fixed";



        no.style.left =
        Math.random()*80 + "%";



        no.style.top =
        Math.random()*80 + "%";



    }







    no.addEventListener(
        "mouseenter",
        moveNo
    );



    no.addEventListener(
        "touchstart",
        moveNo
    );



    no.addEventListener(
        "click",
        moveNo
    );








    yes.addEventListener(
        "click",
        function(){



            buttons.innerHTML = "";



            text.innerHTML =
            "BİLİYORDUM TWIN 😎💚";



            createHearts();





            setTimeout(
                function(){


                    text.innerHTML =
                    "I LOVE YOU TWIN 💚";


                },
                3000
            );







            setTimeout(
                function(){


                    document.body.style.transition =
                    "3s";


                    document.body.style.opacity =
                    "0";



                },
                7000
            );




        }
    );



}









// ===============================
// KALP YAĞMURU
// ===============================


function createHearts(){



    for(
        let i = 0;
        i < 100;
        i++
    ){



        const heart =
        document.createElement("div");



        heart.className =
        "heart";



        heart.innerHTML =
        "💚";



        heart.style.left =
        Math.random()*100 + "%";



        heart.style.fontSize =
        (
            Math.random()*25 + 15
        ) + "px";



        heart.style.animationDuration =
        (
            Math.random()*3 + 4
        ) + "s";



        document.body.appendChild(
            heart
        );





        setTimeout(
            function(){


                heart.remove();


            },
            8000
        );



    }



}









// ===============================
// HEDİYE KUTUSU
// ===============================


let giftOpened = false;





function openGift(){



    if(giftOpened){

        return;

    }



    giftOpened = true;




    gift.classList.add(
        "open"
    );





    setTimeout(
        function(){



            giftScreen.classList.add(
                "hide"
            );



            if(kisuke){


                kisuke.classList.add(
                    "show"
                );


            }






            setTimeout(
                function(){


                    startStory();



                },
                1500
            );



        },
        1000
    );



}







// ===============================
// PC + MOBİL TIKLAMA
// ===============================



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
