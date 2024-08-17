var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
var image = document.querySelector(".image")

main.addEventListener("mousemove" , (dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease: "back.out(5)",
    }
    )
})

image.addEventListener("mouseenter",()=>[
    cursor.innerHTML = "view more",
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff85"
        
    })
] )


image.addEventListener("mouseleave" , ()=>{
    cursor.innerHTML = " ",
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff",
    })
})