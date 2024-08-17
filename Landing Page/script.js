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