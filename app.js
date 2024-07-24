// locomotive code 
(function () {
  var scroll = new LocomotiveScroll();
})();



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
let preloaderTimeline = gsap.timeline();
preloaderTimeline.to(".preloaderDiv", {
  width: "100%",
  stagger: {
    each: 0.1,
    from: "start",
  },
  duration: 1.2,
  ease: "expo.inOut",
}, "kau");
preloaderTimeline.to(".pre-logo-text", {
  zIndex: 99,
  opacity: 1,
}, "kau");
preloaderTimeline.from(".left-rotate-img", {
  y: "100px",
  stagger: 0.1,
});
preloaderTimeline.from(".pre-logo-text span", {
  y: "100px",
  stagger: 0.1,
});
preloaderTimeline.to(".first-img-preloader img", {
  top:0,
  left: "0%"
}, "bea");
preloaderTimeline.to(".second-img-preloader img", {
  right: "5%"
}, "bea");
const allBotomSpanPre = document.querySelectorAll(".pre-bottom-counter span");
let preloaderIndex = 0;
while (preloaderIndex <= 3) {
  preloaderTimeline.to(allBotomSpanPre[preloaderIndex], {
    top: 0,
    duration: 1,
    onComplete: function () {
      gsap.set(this._targets[0], { top: "-100%" });
    },
  });
  preloaderIndex++;
}
preloaderTimeline.to(".first-img-preloader img", {
  left: "-50%"
}, "sap");
preloaderTimeline.to(".second-img-preloader img", {
  right: "-50%"
}, "sap");

preloaderTimeline.to(".pre-logo-text", {
  height: "40vw",
}, "tannu");
preloaderTimeline.to(".pre-logo-text span", {
  fontSize: "11vw",
}, "tannu");
preloaderTimeline.to("#preloader", {
  backgroundColor: "rgb(170, 168, 168,0)"
}, "tannu");
// Hide preloader divs
preloaderTimeline.to(".preloaderDiv", {
  width: "0%",
  right: 0,
  stagger: {
    each: 0.1,
    from: "random",
  },
  duration: 1,
  ease: "expo.inOut",
}, "a");
// Hide logo text
preloaderTimeline.to(".pre-logo-text", {
  zIndex: -9,
  opacity: 0,
  delay: 0.3,
}, "a");
preloaderTimeline.to("#preloader", {
  scale: 0,
  borderRadius: "50%"
});
// nav code 
let nav = document.querySelector(".toggle");
let navBar = document.querySelector(".nav-bar");
let fullNav = document.querySelector(".full");
navBar.onclick = function () {
  nav.classList.toggle("active");
  fullNav.classList.toggle("active");
  if (fullNav.classList.contains("active")) {
    gsap.to(".full", {
      opacity: 1,
      duration: 1,
      right: "1vw"
    });
    gsap.from(".full h4", {
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      x: "200px"
    })
    gsap.from(".nav-social i", {
      opacity: 0,
      stagger: 0.3,
      delay: 3,
    })
  }
  else {
    gsap.to(".full", { opacity: 0, duration: 1, right: "-30vw" });
  }
};
let arr = [
  {
    "src": "img/third img animation.png",
    "deg": "45",
  },
  {
    "src": "images/icecream.jpg",
    "deg": "90",
  },
  {
    "src": "images/plate burger.png",
    "deg": "135",
  },
  {
    "src": "images/burger2.png",
    "deg": "180",
  },
  {
    "src": "images/coffe.png",
    "deg": "225",
  },
  {
    "src": "images/icecream.jpg",
    "deg": "270",
  },
  {
    "src": "images/palatable-chicken-with-spices.png",
    "deg": "315",
  },
  {
    "src": "images/burger 3.png",
    "deg": "360",
  }
]
const centerImg = document.querySelector(".centerimg img")
const tempBox = document.querySelector(".tempbox")
const rightBtn = document.querySelector(".rightbtn")
const leftbtn = document.querySelector(".leftbtn")
const temptexth4 = document.querySelectorAll(".temp-text1 h4")
const temptexth1 = document.querySelectorAll(".temp-text2 h1")
let index = 0;
function rotateRight() {
  centerImg.style.opacity = '0'
  temptexth1[index].style.top = '-100%'
  temptexth4[index].style.top = '-100%'
  index = (index + 1) % arr.length;
  if (index == 0) {
    temptexth1.forEach((temp) => {
      temp.style.top = '100%'
    })
    temptexth4.forEach((temp) => {
      temp.style.top = '100%'
    })
  }
  temptexth1[index].style.top = '0'
  temptexth4[index].style.top = '0'
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.src = arr[index].src;
    centerImg.style.opacity = '1'
  }, 220);
}
function rotateLeft() {
  centerImg.style.opacity = '0'
  temptexth1[index].style.top = '100%'
  temptexth4[index].style.top = '100%'
  index = (index - 1 + arr.length) % arr.length;
  if (index == 7) {
    temptexth1.forEach((temp) => {
      temp.style.top = '-100%'
    })
    temptexth4.forEach((temp) => {
      temp.style.top = '-100%'
    })
  }
  temptexth1[index].style.top = '0'
  temptexth4[index].style.top = '0'
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.src = arr[index].src;
    centerImg.style.opacity = '1'
  }, 220);
}
rightBtn.addEventListener("click", rotateRight)
leftbtn.addEventListener("click", rotateLeft)
// our secreate recipe page animation
const recipecardAll = document.querySelectorAll(".recipecard")
recipecardAll.forEach((elem) => {
  elem.addEventListener("mousemove", () => {
    const img = elem.querySelector(".rec-img-div img")
    img.style.scale = "1.2"
  })
  elem.addEventListener("mouseleave", () => {
    const img = elem.querySelector(".rec-img-div img")
    img.style.scale = "1"
  })
})
let recipeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top 70%",
    end: "top -150%%",
    // markers:true,
    scrub: 2,
  }
});
recipeTimeline
  .from(".yellowbox", { height: 0, opacity: 0 }, "<")
  .from(".yellowbox img", { height: 0, opacity: 0, }, "<") // "<" starts this animation at the same time as the previous one
  .from(".recipecard1", { opacity: 0, left: "-30%", rotate: "60deg" }, "<")
  .from(".recipecard2", { opacity: 0, left: "-30%", rotate: "60deg" }, "<")
  .from(".recipecard3", { opacity: 0, right: "-30%", rotate: "-60deg" }, "<")
  .from(".recipecard4", { opacity: 0, right: "-30%", rotate: "-60deg" }, "<")
  .from(".recipecard5", { opacity: 0, right: "-30%", rotate: "-60deg" }, "<")
  .from(".recipecard6", { opacity: 0, left: "-30%", rotate: "60deg" }, "<");
// Create another timeline for the animations with different start positions
let recipeTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top -20%",
    // markers:true,
  }
});
recipeTimeline2
// .from(".recipecard2", { scale: 0, left: "50%" })
// .from(".recipecard3", { scale: 0, left: "50%" }, "<");
window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 5,
      repeat: -1,
      ease: "none"
    })
  } else {
    gsap.to(".marque", {
      transform: "translateX(0)",
      duration: 5,
      repeat: -1,
      ease: "none"
    })
  }
})
// page animation
let am = gsap.timeline({
  scrollTrigger: {
    trigger: ".page",
    // markers:true,
    start: "30% 80%",
    end: "30% 45%",
    scrub: 1,
  },
})
am.to(".text-hover .first", {
  width: "100%",
})
am.to(".text-hover .second", {
  width: "100%",
})
am.to(".text-hover .third", {
  width: "100%",
})
const allBurgerTextH1First = document.querySelectorAll(".first-burger-texth1")
const allBurgerTextH1Second = document.querySelectorAll(".first-burger-text-2")
allBurgerTextH1First.forEach((elem) => {
  const allFirstH1 = elem.querySelectorAll(".first-burger-texth1 h1")
  let firstBurgerTextIndex = 0
  document.querySelector(".img1").addEventListener("click", () => {
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "-100%",
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" })
      }
    })

    if (firstBurgerTextIndex === allFirstH1.length - 1) {
      firstBurgerTextIndex = 0;
    } else firstBurgerTextIndex++

    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "5%"
    })
  })
})
allBurgerTextH1Second.forEach((elem) => {
  const allFirstH1 = elem.querySelectorAll(".first-burger-text-2 h1")
  let firstBurgerTextIndex = 0
  document.querySelector(".img2").addEventListener("click", () => {
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "-100%",
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" })
      }
    })
    if (firstBurgerTextIndex === allFirstH1.length - 1) {
      firstBurgerTextIndex = 0;
    } else firstBurgerTextIndex++

    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "5%"
    })
  })
})
// menu page animtion page sixth 
const allTextP = document.querySelectorAll(".textp")
allTextP.forEach((text) => {
  const textcontent = text.textContent
  const splitedText = textcontent.split("");
  let clutter = ''
  splitedText.forEach((e) => {
    if (e == " ") {
      e = "&nbsp;"
    }
    clutter += `<span class="a" >${e}</span>`
  })

  text.innerHTML = clutter
})
const createAnimation = (selector, properties, scrollTrigger) => {
  gsap.from(selector, {
    ...properties,
    scrollTrigger: {
      trigger: ".menu",
      scrub: true,
      ...scrollTrigger
    }
  });
};
// Text animations
createAnimation(".textp.first span", { opacity: 0, stagger: 0.1 }, { start: "30% 40%", end: "50% 60%", });
createAnimation(".textp.second span", { opacity: 0, stagger: 0.1 }, { start: "40% 40%", end: "70% 10%", });
createAnimation(".textp.third span", { opacity: 0, stagger: 0.1 }, { start: "90% 50%", end: "100% 50%" });
createAnimation(".textp.fourth span", { opacity: 0, stagger: 0.1 }, { start: "110% 50%", end: "120% 50%" });
// Image animations
createAnimation(".firstImg", { rotate: 90, stagger: 0.1 }, { start: "30% 40%", end: "50% 60%" });
createAnimation(".secondImg", { rotate: 90, stagger: 0.1 }, { start: "60% 40%", end: "70% 10%" });
createAnimation(".thirdImg", { rotate: 90, stagger: 0.1 }, { start: "90% 50%", end: "100% 50%", });
createAnimation(".fourthImg", { rotate: 90, stagger: 0.1 }, { start: "110% 50%", end: "120% 50%" });
// smoke or salt img animation
createAnimation(".saltimg img", { x: "-100%" }, { start: "30% 30%", end: "50% 60%" })
createAnimation(".saltimg1 img", { x: "-100%" }, { start: "70% 50%", end: "70% 10%" })
let gallery = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery",
    // markers: true,
    start: "50% 50%",
    end: "150% 50%",
    pin: true,
    scrub: true

  }
})
gallery.to(".top-con h1", {
  rotateX: "100deg",
  opacity: 0,
  duration: 1.5,
  display: "none"
}, "rc")
gallery.to(".center-con .upper", {
  rotateX: "100deg",
  opacity: 0,
  duration: 1.5,
}, "rc")
gallery.to(".center-con .lower", {
  rotateX: "-100deg",
  opacity: 0,
  duration: 1.5,
}, "rc")
gallery.to(".center-con .middle .middle-left", {
  rotateY: "-100deg",
  opacity: 0,
  duration: 1.5,
}, "rc")
gallery.to(".center-con .middle .middle-right", {
  rotateY: "100deg",
  opacity: 0,
  duration: 1.5,
}, "rc")

gallery.to(".middle-video", {
  width: "90vw",
  height: "90vh",
  duration: 5,
}, "rc")
// burgeranimation page
let burgerpageTimeline = gsap.timeline({
  scrollTrigger: {
    start: "50% 50%",
    end: "bottom -200%",
    // markers:true,
    scrub: true,
    trigger: "#burgeranimation",
    pin: true,
  }
})
gsap.from("#burgeranimtionPage1 .burgerimg", {
  top: "100%",
  duration: 10,
  scrollTrigger: {
    trigger: "#burgeranimation",
    start: "30% 50%",
    end: "50% 10%",
    // markers:true,
    scrub: true

  }
})
burgerpageTimeline.from(" #burgeranimtionPage1 .bi", {
  top: "50%",
  left: "50%",
  duration: 57,
  zindex: -1,
  scale: 0
}, "a")
burgerpageTimeline.from("#burgeranimtionPage1 h1", {
  top: "50%",
  left: "50%",
  opacity: 0,
  scale: 0,
  duration: 57,
}, "a")
burgerpageTimeline.to("#burgeranimationPage2", {
  width: "100vw",
  ease: Expo.isOut,
  duration: 57,
  delay: 10
})
burgerpageTimeline.from("#burgeranimationPage2 .burgerimg", {
  top: "150%",
  duration: 57,
})
burgerpageTimeline.from("#burgeranimationPage2 .bi", {
  top: "50%",
  left: "50%",
  duration: 57,
  zindex: -1,
  scale: 0
}, "beauty")
burgerpageTimeline.from("#burgeranimationPage2 h1", {
  top: "50%",
  left: "50%",
  duration: 57,
  opacity: 0,
  scale: 0
}, "beauty")
burgerpageTimeline.to("#burgeranimationPage3", {
  width: "100vw",
  ease: Expo.isOut,
  duration: 57,
  delay: 10,
})
burgerpageTimeline.from("#burgeranimationPage3 .burgerimg", {
  top: "150%",
  duration: 57
})
burgerpageTimeline.from("#burgeranimationPage3 .bi", {
  top: "50%",
  left: "50%",
  duration: 57,
  zindex: -1,
  scale: 0
}, "kaushal")
burgerpageTimeline.from("#burgeranimationPage3 h1", {
  top: "50%",
  left: "50%",
  opacity: 0,
  scale: 0,
  duration: 57,
}, "kaushal")
// review page animation
const reviewLeft = document.querySelector(".reviewBtnleft");
const reviewRight = document.querySelector(".reviewBtnRight");
const allReviewCard = document.querySelectorAll(".reviewcard");
let reviewIndex = 0;
function animateReview(direction) {
  const previousIndex = reviewIndex;
  const nextIndex = (reviewIndex + direction + allReviewCard.length) % allReviewCard.length;
  gsap.to(allReviewCard[previousIndex], {
    left: direction > 0 ? "125%" : "-24%",
    duration: 0.9,
  });
  gsap.to(allReviewCard[nextIndex], {
    zIndex: 9,
    duration: 0.9,
  });
  gsap.to(allReviewCard[previousIndex], {
    left: "50%",
    zIndex: 1,
    delay: 0.9
  });
  reviewIndex = nextIndex;
}
gsap.to("#review", {
  backgroundColor: "antiquewhite",
  ease: "expo.inOut",
  duration: 4,
  scrollTrigger: {
    trigger: "#review",
    start: "top 20%",
    end: "top 25%",
    scrub: true,
  }
})
reviewRight.addEventListener("click", () => animateReview(1));
reviewLeft.addEventListener("click", () => animateReview(-1));
function breakTheText() {
  let footerH1 = document.querySelector(".footer-anim h1")
  let footerH1Text = footerH1.textContent
  let splittedText = footerH1Text.split("")
  let halfValue = splittedText.length / 2
  let clutter = ""
  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="footerA">${elem}</span>`

    } else {
      clutter += `<span class="footerB">${elem}</span>`
    }
  })
  footerH1.innerHTML = clutter
}
breakTheText()
gsap.from(".footer-anim h1 .footerA", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "65% 85%",
    end: "65% 85%",
    scrub: 2
  }
})
gsap.from(".footer-anim h1 .footerB", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: -0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "70% 90%",
    end: "70% 70%",
    scrub: 2
  }
})
gsap.from("#footer .footer-circle-logo img", {
  transform: "rotate(150deg)",
  duration: 4,
  scrollTrigger: {
    trigger: "#footer .footer-circle-logo img",
    scroller: "body",
    // markers:true,
    start: "65% 90%",
    end: "65% 75%",
    scrub: 2
  }
})
gsap.from("#footer .footer-left img", {
  translateX: ("-30vw"),
  duration: 3,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "25% 90%",
    end: "25% 50%",
    scrub: 2
  }
})
;(function(){
  let chck_if_gsap_loaded = setInterval(function(){
      if(window.gsap && window.ScrollTrigger){
          gsap.registerPlugin(ScrollTrigger);
          slide_background();
          clearInterval(chck_if_gsap_loaded);
      }
  }, 500);
  function slide_background(){
    gsap.to("nav .nav-bar,nav .nav-bar .toggle span",{
    scrollTrigger: {
    trigger: "#menu",
    scroller:"body",
    start: "top 0",
    end:"top 5%",
    scrub:2,
    },
      color:"white",
      border:"1px solid white",
    },"abcde"),
    gsap.to("nav .full",{
      backgroundColor: "rgba(255, 255,255, 0.3)",
    },"abcde");
  }
})();
gsap.to("nav .nav-bar, nav .nav-bar .toggle span",{
  color:"black",
  border:"1px solid black",
  scrollTrigger:{
    trigger:"#footer",
    scroller:"body",
    start:"-50% -50%",
    end:"-50% 100%",
    scrub:1
  }
})
gsap.from("#review .reviewcard .img", {
  width: 0,
  opacity: 0,
  scrollTrigger: {
  trigger: "#review .reviewcard",
    scroller: "body",
    start: "0% 70%",
    end: "50% 70%",
  }
})

var bgChange = gsap.timeline({scrollTrigger:{
  trigger:"#ourSecretRecipe",
  // markers:true,
  start:"0% 50%",
  end:"0% 20%",
  scrub:1,
  duration:1
}});
bgChange.to(".food-gallery",{
  backgroundColor:"#f5e5d5"
},"mno")
bgChange.to("#ourSecretRecipe",{
  backgroundColor:"#f5e5d5"
},"mno")

var bgChange = gsap.timeline({scrollTrigger:{
  trigger:"#menu",
  // markers:true,
  start:"0% 70%",
  end:"0% 30%",
  scrub:1,
  duration:1
}});
bgChange.to("#ourSecretRecipe",{
  backgroundColor:"black"
},"pq1")
bgChange.to("#menu",{
  backgroundColor:"black"
},"pq1")

