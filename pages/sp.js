const Scsong = new Audio() ;
Scsong.src = "../Img/HYWsong.mp3" ;

function playsong() {
    console.log("Songplay!");
    Scsong.play();
    console.log("Loop /");
    Scsong.loop = true
}  