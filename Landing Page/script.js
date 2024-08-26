function animationPage1(){
    

    var tl = gsap.timeline();

tl.from("nav h1, nav .part2 h4, nav .part2 button",{
    opacity:0,
    duration:0.6,
    delay:0.2,
    y:-40,
    stagger:0.2

})

tl.from(".center .center-part1 h1 , .center-part1 p , .center-part1 button",{
    opacity:0,
    duration:0.5,
    x:-40,
    stagger:0.2
})

tl.from(".center-part2 img",{
    opacity:0,
    x:40,

}, "-=1")

gsap.from(".section1Bottom .img", {
    scrollTrigger:".section1Bottom .img",

    
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.4,
    delay:1
    });


}

animationPage1();


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:" top 40%",
        end:"top -10%",
        scrub: 2,
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})


//line1
tl2.from(".elem.left.line1",{
    x:-300,
    opacity:0,
    duration:1

},"anime")

tl2.from(".elem.right.line1",{
    x:300,
    opacity:0,
    duration:1

},"anime")



//line2
tl2.from(".elem.left.line2",{
    x:-300,
    opacity:0,
    duration:1

},"line2")

tl2.from(".elem.right.line2",{
    x:300,
    opacity:0,
    duration:1

},"line2")


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2 .container .elem",
        scroller:"body",
        start:"center  -20%",
        end:"top 20%",
        scrub: 2,
    }
})
tl3.from(".section3 .box",{
    y:50,
    opacity:0,
    duration:0.5
})

tl3.from(".section2 .box h2",{
    x:30,
    opacity:0,

})

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3 .box ",
        scroller:"body",
        start:"top  -20%",
        end:"top 20%",
        scrub: 2,
    }
})

tl4.from(".section3 .caseStudy" ,{
    x:-50,
    opacity:0,
    duration:0.5
})

tl4.from(".section3  .container-b",{
    y:50,
    opacity:0,
    duration:0.5
})



var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");

var mouseX = 0;
var mouseY = 0;

// Function to update the cursor position
function updateCursorPosition() {
    gsap.to(cursor, {
        x: mouseX + window.scrollX,
        y: mouseY + window.scrollY,
        duration: 0.9, // Duration for smooth effect
        ease: "back.out(3)",
    });
}

// Handle mousemove event
main.addEventListener("mousemove", function(dets) {
    mouseX = dets.clientX;
    mouseY = dets.clientY;
    updateCursorPosition();
});

// Handle scroll event
window.addEventListener("scroll", function() {
    updateCursorPosition();
});
