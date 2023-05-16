// ----------------main smooth scroll animation---------------
function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

// ----------------loading animation---------------
var count = document.querySelector("#loading>h1");
function updateProgress() {
  var progressBar = document.getElementById('progress');
  var width = 0;
  var interval = setInterval(frame, 15);
  
  function frame() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + '%';
      progressBar.innerHTML = width + '%';
    }
  }
}
updateProgress();

// ----------------nav animation---------------
var nimg = document.querySelector("#nimg");
var nav = document.querySelector("#nav");
var nimg2 = document.querySelector("#nav>img");
nimg.addEventListener("click", () => {
  nav.style.zIndex = 999;
  nav.style.opacity = 1;
  nimg.style.zIndex = -9;
});
nimg2.addEventListener("click", () => {
  nav.style.zIndex = -9;
  nav.style.opacity = 0;
  nimg.style.zIndex = 999;
});

// ----------------page1 animation---------------
gsap.from("#p1c1", {
  delay: 5,
  opacity: 0,
  x: 500,
  duration: 5,
});
gsap.from("#p1c2", {
  delay: 5,
  opacity: 0,
  x: -500,
  duration: 5,
});

// ----------------page2 animation---------------
gsap.to("#shutter1", {
  rotate: "360deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#shutter1",
    scrub: true,
    // markers: true,
    end: "top -70%",
    start: "top 60%",
  },
});
gsap.to("#shutter2", {
  rotate: "250deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#shutter1",
    scrub: true,
    // markers: true,
    start: "top 130%",
    end: "top -20%",
  },
});
gsap.from("#page2", {
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    scrub: true,
    // markers: true,
    end: "top 80%",
  },
});
// ----------------page3 animation---------------
gsap.from("#page3", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    scrub: true,
    // markers: true,
    end: "top 60%",
  },
});

// ----------------page4 animation---------------
gsap.from("#p43", {
  x: -800,
  rotate: "-90deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p43",
    scrub: true,
    end: "top 35%",
    start: "top 90%",
    // markers:true
  },
});
gsap.from("#p41", {
  x: -1000,
  rotate: "-60deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p41",
    scrub: true,
    end: "top 20%",
    start: "top 90%",
    // markers:true
  },
});
gsap.from("#p44,#p45", {
  x: 1000,
  rotate: "140deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p44,#p45",
    scrub: true,
    end: "top 20%",
    start: "top 90%",
    // markers:true
  },
});
gsap.from("#p42", {
  x: 700,
  rotate: "60deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p42",
    scrub: true,
    end: "top 60%",
    start: "top 110%",
    // markers:true
  },
});
gsap.to("#p46", {
  x: 1800,
  rotate: "20deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p46",
    scrub: true,
    end: "top 0%",
    start: "top 90%",
    // markers:true
  },
});
var tl = gsap.timeline();
tl.to("#p47", {
  x: -700,
  y: 200,
  scale: 0.5,
  rotate: "-30deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p47",
    scrub: true,
    end: "top 0%",
    start: "top 50%",
    // markers:true
  },
});
tl.fromTo(
  "#p47",
  {
    scale: 0.5,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p47",
      // markers: true,
      scrub: true,
      start: "top 0",
      end: "top -50%",
    },
  },
  {
    // opaacity:1,
    y: 700,
    x: -800,
    scale: 0.1,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p47",
      // markers: true,
      scrub: true,
      start: "top 0",
      end: "top -50%",
    },
  }
);
// ----------------page5 animation---------------
gsap.from("#p51", {
  opacity: 0,
  y: 700,
  scrollTrigger: {
    // markers: true,
    scroller: "#main",
    trigger: "#p51",
    end: "top 40%",
    start: "top 120%",
    scrub: true,
  },
});
gsap.from("#p54,#p57", {
  opacity: 0,
  scrollTrigger: {
    // markers: true,
    scroller: "#main",
    trigger: "#p54,#p57",
    end: "top 50%",
    start: "top 60%",
    scrub: true,
  },
});
gsap.from("#p53,#p56,#p52", {
  opacity: 0,
  scrollTrigger: {
    // markers: true,
    scroller: "#main",
    trigger: "#p53,#p56",
    end: "top 50%",
    start: "top 60%",
    scrub: true,
  },
});
gsap.to("#p55", {
  opacity: 1,
  y: 100,
  scrollTrigger: {
    // markers: true,
    scroller: "#main",
    trigger: "#p55",
    end: "top 0%",
    start: "top 100%",
    scrub: true,
  },
});
gsap.from("#p58", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    // markers: true,
    scroller: "#main",
    trigger: "#p58",
    end: "top 60%",
    start: "top 70%",
    scrub: true,
  },
});

// ----------------page6 animation---------------
gsap.from("#p6k1", {
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p6k1",
    scrub: true,
    start: "top 80%",
    end: "top 60%",
    // markers:true,
  },
});
gsap.from("#p6c2", {
  x: 200,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p6c1",
    // markers: true,
    scrub: true,
    end: "top 50%",
    start: "top 120%",
  },
});
gsap.from("#p6c1", {
  x: -400,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p6c1",
    // markers: true,
    scrub: true,
    end: "top 10%",
    start: "top 120%",
  },
});
gsap.from("#p6k2", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p6k2",
    // markers: true,
    scrub: true,
    end: "top 50%",
    start: "top 60%",
  },
});

// ----------------page7 animation---------------
gsap.to("#p7img", {
  scrollTrigger: {
    pin: true,
    trigger: "#p7img",
    scroller: "#main",
    scrub: true,
    end: "top -95%",
    // markers:true
  },
});

// ----------------page9 animation---------------
gsap.from("#p9skullkiss", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#p9skullkiss",
    scroller: "#main",
    scrub: true,
    end: "top 60%",
    start: "top 70%",
    // markers:true
  },
});
gsap.to("#p91", {
  rotate: "-10deg",
  scrollTrigger: {
    trigger: "#p91",
    scroller: "#main",
    scrub: true,
    end: "top 0%",
    // start:"top 90%",
    // markers:true
  },
});
gsap.to("#p91frame", {
  rotate: "-20deg",
  scrollTrigger: {
    trigger: "#p91frame",
    scroller: "#main",
    scrub: true,
    end: "top 0%",
    // start:"top 90%",
    // markers:true
  },
});
gsap.from("#p9b10", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b10",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b9", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b9",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b8,#p9b7", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b8,#p9b7",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b6", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b6",
    scrub: true,
    // markers: true,
    end: "top 50%",
    start: "top 70%",
  },
});
gsap.from("#p9b1", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b1",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b2", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b2",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b4,#p9b3", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b3,#p9b4",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});
gsap.from("#p9b5", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p9b5",
    scrub: true,
    // markers: true,
    end: "top 60%",
    start: "top 80%",
  },
});

// ----------------page10 animation---------------
gsap.from("#p10center", {
  y: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p10center",
    scrub: true,
    // markers: true,
    end: "top 60%",
  },
});
gsap.from("#p10left", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p10left",
    scrub: true,
    // markers: true,
    end: "top 10%",
  },
});
gsap.from("#p10right", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p10right",
    scrub: true,
    // markers: true,
    end: "top 10%",
  },
});
gsap.from("#p10water", {
  y: -300,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p10water",
    scrub: true,
    // markers: true,
    start: "top 90%",
    end: "top 20%",
  },
});

var locket = document.querySelector("#p101");
var textp10 = document.querySelector("#page10>h2");
var jackp10 = document.querySelector("#p103");
var jackp101 = document.querySelector("#page10>h3");
var p10arrow = document.querySelector("#p102");
var f10 = 0;
locket.addEventListener("click", () => {
  if (f10 == 0) {
    jackp10.style.rotate = "0deg";
    jackp101.style.opacity = "1";
    textp10.style.opacity = "0";
    p10arrow.style.opacity = "0";
    f10 = 1;
  } else {
    jackp10.style.rotate = "-180deg";
    jackp101.style.opacity = "0";
    textp10.style.opacity = "1";
    p10arrow.style.opacity = "1";
    f10 = 0;
  }
});
// ----------------page11 animation---------------
gsap.from("#cp112", {
  rotate: "-360deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#cp112",
    scrub: true,
    // markers: true,
    start: "top 90%",
    end: "top 0%",
  },
});
gsap.to("#p11c1", {
  scrollTrigger: {
    pin: true,
    scroller: "#main",
    trigger: "#p11c1",
    scrub: true,
    // markers: true,
    end: "top -30%",
    start: "top 60%",
  },
});
gsap.from("#p11c6", {
  y: -600,
  scrollTrigger: {
    // pin:true,
    scroller: "#main",
    trigger: "#p11c6",
    scrub: true,
    // markers: true,
    end: "top -50%",
    start: "top 60%",
  },
});

// ----------------page12 animation---------------
gsap.from("#p12btl", {
  rotate: "360deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p12btl",
    scrub: true,
    // markers: true,
    end: "top 20%",
    start: "top 90%",
  },
});

var p12box = document.querySelector("#p12box");
var page12 = document.querySelector("#page12");

gsap.to("#page12", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page12",
    scrub: true,
    // markers: true,
    pin: true,
    start: "top -30%",
    end: "top -300%",
  },
});
gsap.to("#p12box2", {
  xPercent: -85,
  ease: "none",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p12box2",
    scrub: true,
    // markers: true,
    // pin: true,
    start: "top -30%",
    end: "top -200%",
  },
});

// ----------------page13 animation---------------
gsap.from("#p13c1", {
  x: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p13c1",
    scrub: true,
    // markers: true,
    end: "top 30%",
  },
});
gsap.from("#p13c2", {
  x: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p13c1",
    scrub: true,
    // markers: true,
    end: "top 0%",
  },
});

// ----------------page14 animation---------------

var tl2 = gsap.timeline();

tl2.from("#p14c8", {
  x: 200,
  rotate: "70deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p14c8",
    scrub: true,
    // markers: true,
    start: "top 60%",
    end: "top 10%",
  },
});
tl2.fromTo(
  "#p14c8",
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p14c8",
      scrub: true,
      // markers: true,
      start: "top 10%",
      end: "top -70%",
    },
  },
  {
    scale: 1.7,
    x: -200,
    y: 1200,
    rotate: "360deg",
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p14c8",
      scrub: true,
      // markers: true,
      start: "top 10%",
      end: "top -120%",
    },
  }
);

var tl3 = gsap.timeline();

tl3.from("#p14c9", {
  x: -200,
  rotate: "-70deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p14c9",
    scrub: true,
    // markers: true,
    start: "top 60%",
    end: "top 10%",
  },
});
tl3.fromTo(
  "#p14c9",
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p14c9",
      scrub: true,
      // markers: true,
      start: "top 10%",
      end: "top -70%",
    },
  },
  {
    x: 200,
    y: 1400,
    scale: 2,
    rotate: "-360deg",
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p14c9",
      scrub: true,
      // markers: true,
      start: "top 10%",
      end: "top -120%",
    },
  }
);
var p14img2 = document.querySelector("#p14img2");
var p14img4 = document.querySelector("#p14img4");

p14img4.addEventListener("click", () => {
  p14img2.style.opacity = 1;
  p14img4.style.opacity = 0;
});
p14img2.addEventListener("click", () => {
  p14img4.style.opacity = 1;
  p14img2.style.opacity = 0;
  // alert("hey");
});
// ----------------page15 animation---------------
gsap.from("#bubble3", {
  y: 500,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bubble3",
    scrub: true,
    // markers: true,
    start: "top 130%",
    end: "top 0%",
  },
});
gsap.from("#bubble2", {
  y: 200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bubble2",
    scrub: true,
    // markers: true,
    start: "top 130%",
    end: "top 0%",
  },
});
gsap.from("#bubble1", {
  y: 500,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bubble1",
    scrub: true,
    // markers: true,
    start: "top 140%",
    end: "top 10%",
  },
});
gsap.from("#bubble11", {
  y: 500,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bubble11",
    scrub: true,
    // markers: true,
    start: "top 140%",
    end: "top 10%",
  },
});
gsap.from("#bubble10", {
  y: 500,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bubble10",
    scrub: true,
    // markers: true,
    start: "top 130%",
    end: "top 0%",
  },
});
gsap.to("#overlayp15", {
  scale: 20,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#overlayp15",
    scrub: true,
    // markers: true,
    pin: true,
    start: "top -20%",
    end: "top -200%",
  },
});
gsap.to("#p15lc", {
  y: -100,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p15lc",
    scrub: true,
    start: "top -50%",
    end: "top -200%",
  },
});
gsap.from("#p15lw", {
  y: -200,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p15lw",
    scrub: true,
    // markers: true,
    // pin: true,
    start: "top 40%",
    end: "top 0%",
  },
});
gsap.to("#page15", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page15",
    pin: true,
    // markers: true,
    end: "top -400%",
    start: "top -200%",
  },
});
gsap.from("#p15ll", {
  y: 800,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p15ll",
    scrub: true,
    // markers: true,
    start: "top 60%",
    end: "top -50%",
  },
});
gsap.from("#overlaydog", {
  x: 1500,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#overlaydog",
    scrub: true,
    // markers: true,
    start: "top 60%",
    end: "top -100%",
  },
});
// ----------------page16 animation---------------
gsap.from("#p16c1", {
  x: -300,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p16c1",
    scrub: true,
    // markers:true
  },
});
gsap.from("#p16c2", {
  x: 300,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p16c2",
    scrub: true,
    // markers:true
  },
});
// ----------------page17 animation---------------
var p172img = document.querySelector("#p172img");

window.addEventListener("mousemove", (dets) => {
  p172img.style.left = 1 - dets.x * 0.05 + "px";
  p172img.style.top = 1 - dets.y * 0.05 + "px";
});

var p17img = document.querySelectorAll(".p17img");
gsap.from(".p17img", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: p17img,
    scrub: true,
    // markers: true,
    start: "top 110%",
    end: "top 40%",
  },
});
// ----------------page18 animation---------------
var p18boat = document.querySelector("#p18boat");
var p18overlay = document.querySelector("#p18overlay");
var p18flag = 0;
p18boat.addEventListener("click", () => {
  if (p18flag == 0) {
    p18boat.style.backgroundImage = "url(./p182.png)";
    p18overlay.style.opacity = 1;
    p18flag = 1;
  } else {
    p18boat.style.backgroundImage = "url(./p181.png)";
    p18overlay.style.opacity = 0;
    p18flag = 0;
  }
});

// ----------------page19 animation---------------
var p19slider = document.querySelector("#p19slider");
var page12 = document.querySelector("#page19");

gsap.to("#page19", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page19",
    scrub: true,
    // markers: true,
    pin: true,
    start: "top -20%",
    end: "top -300%",
  },
});
gsap.to("#p19slider", {
  xPercent: -67,
  ease: "none",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p19slider",
    scrub: true,
    // markers: true,
    // pin: true,
    start: "top -30%",
    end: "top -240%",
  },
});

// ----------------page20 animation---------------
var p202 = document.querySelector("#p202");
var bullet = document.querySelector("#bullet");
var bullet2 = document.querySelector("#bullet2");

var flag20 = 0;
p202.addEventListener("click", () => {
  if (flag20 == 0) {
    gsap.to("#bullet", {
      x: 600,
    });
    gsap.to("#bullet2", {
      x: 0,
      duration:.001,
    });
    gsap.fromTo("#p20gun", {
      rotate:"-2deg"
    }, {
      rotate:"0deg"
    })
    gsap.fromTo("#p201", {
      rotate:"20deg"
    }, {
      rotate:"0deg"
    })
    flag20 = 1;
  }
  else {
    gsap.to("#bullet2", {
      x: 600,
    });
    gsap.to("#bullet", {
      x: 0,
      duration:.001,
    });
    gsap.fromTo("#p20gun", {
      rotate:"-2deg"
    }, {
      rotate:"0deg"
    })
    gsap.fromTo("#p201", {
      rotate:"20deg"
    }, {
      rotate:"0deg"
    })
    flag20 = 0;
  }
});

// ----------------page21 animation---------------
var p211 = document.querySelector("#p211>img");
p211.addEventListener("mousemove", () => {
  p211.style.rotate = "270deg";
});
p211.addEventListener("mouseleave", () => {
  p211.style.rotate = "90deg";
});

// ----------------page23 animation---------------

var p231 = document.querySelector("#p231");
var p231h4 = document.querySelector("#p231>h4");
var p231p = document.querySelector("#p231>p");
var p231i = document.querySelector("#p231>i");
var p231f = 0;

p231.addEventListener("click", () => {
if (p231f == 0) {
    p231h4.style.opacity = ".5";
    p231p.style.marginBottom = "2vw";
    p231i.style.rotate = "45deg";
    p231f =1
  }
  else{
  p231h4.style.opacity = "0";
  p231p.style.marginBottom = "0vw";
    p231i.style.rotate = "0deg";
    p231f =0
}
});

var p232 = document.querySelector("#p232");
var p232h4 = document.querySelector("#p232>h4");
var p232p = document.querySelector("#p232>p");
var p232i = document.querySelector("#p232>i");
var p232f = 0;

p232.addEventListener("click", () => {
if (p232f == 0) {
    p232h4.style.opacity = ".5";
    p232p.style.marginBottom = "3vw";
    p232i.style.rotate = "45deg";
    p232f =1
  }
  else{
  p232h4.style.opacity = "0";
  p232p.style.marginBottom = "0vw";
    p232i.style.rotate = "0deg";
    p232f =0
}
});

var p233 = document.querySelector("#p233");
var p233h4 = document.querySelector("#p233>h4");
var p233p = document.querySelector("#p233>p");
var p233i = document.querySelector("#p233>i");
var p233f = 0;

p233.addEventListener("click", () => {
if (p233f == 0) {
    p233h4.style.opacity = ".5";
    p233p.style.marginBottom = "2vw";
    p233i.style.rotate = "45deg";
    p233f =1
  }
  else{
  p233h4.style.opacity = "0";
  p233p.style.marginBottom = "0vw";
    p233i.style.rotate = "0deg";
    p233f =0
}
});

var p234 = document.querySelector("#p234");
var p234h4 = document.querySelector("#p234>h4");
var p234p = document.querySelector("#p234>p");
var p234i = document.querySelector("#p234>i");
var p234f = 0;

p234.addEventListener("click", () => {
if (p234f == 0) {
    p234h4.style.opacity = ".5";
    p234p.style.marginBottom = "1vw";
    p234i.style.rotate = "45deg";
    p234f =1
  }
  else{
  p234h4.style.opacity = "0";
  p234p.style.marginBottom = "0vw";
    p234i.style.rotate = "0deg";
    p234f =0
}
});


var p235 = document.querySelector("#p235");
var p235h4 = document.querySelector("#p235>h4");
var p235p = document.querySelector("#p235>p");
var p235i = document.querySelector("#p235>i");
var p235f = 0;
p235.addEventListener("click", () => {
if (p235f == 0) {
    p235h4.style.opacity = ".5";
    p235p.style.marginBottom = "1vw";
    p235i.style.rotate = "45deg";
    p235f =1
  }
  else{
  p235h4.style.opacity = "0";
  p235p.style.marginBottom = "0vw";
    p235i.style.rotate = "0deg";
    p235f =0
}
});

var p236 = document.querySelector("#p236");
var p236h4 = document.querySelector("#p236>h4");
var p236p = document.querySelector("#p236>p");
var p236i = document.querySelector("#p236>i");
var p236f = 0;
p236.addEventListener("click", () => {
if (p236f == 0) {
    p236h4.style.opacity = ".5";
    p236p.style.marginBottom = "1vw";
    p236i.style.rotate = "45deg";
    p236f =1
  }
  else{
  p236h4.style.opacity = "0";
  p236p.style.marginBottom = "0vw";
    p236i.style.rotate = "0deg";
    p236f =0
}
});

// ----------------page24 animation---------------
gsap.to("#p24parrot", {
  rotate: "45deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p24parrot",
    // markers: true,
    end: "top 10%",
    start: "top 50%",
    scrub:true
  }
})