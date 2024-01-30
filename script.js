//Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

//page4 animation
function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  //on mouse enter
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  //on mouse leave
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

// Initialize Swiper
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

//Menu Animation
function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var mobileScr = document.querySelector("#mobile-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      mobileScr.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      mobileScr.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

//Loader Animation
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}

page4Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();
