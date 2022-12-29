
function onPageLoading() {

//sự kiện click thẻ a menu mobile
var list = document.getElementsByClassName("a-menu") // elements
for (var i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    //console.log('đã click thẻ a')
    var vMenuMobile = document.getElementById('overlay-mobile');
    vMenuMobile.style.display = "none";
  }
}

  //console.log("load trang")
}

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += "responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

function onBtnSubmitClick() {
  "use strict";
  //console.log('submit click');
  var divEmail = document.getElementById("email-form");
  var showTextTrue = document.getElementById("div-true");
  var showTextFalse = document.getElementById("div-false");
  var vCheck = validateForm();
  if (vCheck == true) {
    divEmail.setAttribute('hidden', false);
    showTextFalse.setAttribute('hidden', false);
    showTextTrue.removeAttribute('hidden');
  } else {
    showTextFalse.removeAttribute('hidden');
  }
}

function validateForm() {
  "use strict";
  var inpName = document.getElementById('inp-name').value;
  var inpEmail = document.getElementById('inp-email').value;
  var inpMess = document.getElementById('inp-field').value;


  if (inpName == '') {
    return false;
  }
  if (inpEmail == '') {
    return false;
  }
  if (inpMess == '') {
    return false;
  } return true;
}

// light box image gallery
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = " block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function onBtnMenuClick() {
  "use strict";
  //console.log('Menu click rồi')
  var vMenu = document.getElementById('myTopnav');
  var vMenuMobile = document.getElementById('overlay-mobile');
  var vIconClose = document.getElementById('icon-close');

  vMenuMobile.style.transform = "translateX(0%)"
  vMenuMobile.style.transition = "all 10s ease 5s";
  vIconClose.style.display = "block";
  vMenuMobile.style.display = "block";

  vMenuMobile.append(vMenu);
  vMenu.style.display = "block";
  var vLogo = document.getElementById('logo');
  vLogo.src = "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f303715879bc5767fc61_hipsterlogogenerator_1428681411802.png"

}

//sự kiện nút icon close
function onBtnCloseClick() {
  "use strict";
  var vMenuMobile = document.getElementById('overlay-mobile');
  vMenuMobile.style.display = "none";
}








