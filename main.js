/*Main Function*/

function UnderDev(){
    alert("ขออภับ! \nปิดปรับปรุ่ง");
}

function offsitelink(){
    alert("เตือน! \nลิ้งค์นี้จะพาคุณไปที่เว็บภายนอก \nถ้าจะไปที่หน้านั้นกด OK");
}

function canAccOnly210(){
    alert("เตือน! \nเข้าได้เฉพาะ ม.2/10 เท่านั้น\nถ้าเป็น ม.2/10 กด ok");
}

function satsun(){
  alert("เตือน! \nทำได้เฉพาะวันเสร์ เวลา 09.00 - อาทิตย์ เวลา 13.00");
}

/*Top page*/

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
