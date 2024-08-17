var menu = document.querySelector(".navbar i");
var close = document.querySelector(".full i");

var tl = gsap.timeline();

tl.from("h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(2)",
  });

tl.from(".navbar h2", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.from(".navbar i", {
  y: -30,
  opacity: 0,
  duration: 0.8,
});



var tl = gsap.timeline();

tl.to(".full", {
  right: 0,
  duration: 0.4,
});

tl.from(".full h2", {
  x: 150,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
